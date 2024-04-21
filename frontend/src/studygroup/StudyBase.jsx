/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useJoinGroup from '../hooks/useJoinGroup.js';
import JoinGroup from './JoinGroup.jsx';
import StudyGroup from './StudyGroup.jsx';
import './StudyBase.css';
import useGetMyGroup from '../hooks/useGetMyGroup.js';
import useCreateGroup from '../hooks/useCreateGroup.js';
import Navbar from '../navbar/navbar.jsx';
import useGetGroup from '../hooks/useGetGroup.js';

const StudyBase = () => {
    const [joinedStatus, setJoinedStatus] = useState(false);
    const [createStatus, setCreateStatus] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [newGroup, setNewGroup] = useState({
    
        name: '',
        image: '',
        description: '',
        
    });
    const { joinGroup } = useJoinGroup();
    const { createGroup } = useCreateGroup();
    const { myGroup } = useGetMyGroup();

    console.log(myGroup);

    useEffect(() => {
        if (myGroup) {
            setJoinedStatus(true);
        }
    }, [myGroup])

   const nameInputs = (e) =>{
        setNewGroup(prevState =>
         ({ ...prevState, name: e.target.value }))
   }

   const descriptionInputs = (e) =>{
    setNewGroup(prevState =>
     ({ ...prevState, description: e.target.value }))
    }

    const imageInputs = (e) =>{
        const image = e.target.files[0]; 
        if (image){
            const fileReader = new FileReader(); // read file as data URL
            fileReader.onload = () => {       
                setNewGroup(prevState =>
                    ({ ...prevState, image: fileReader.result }))
            };
            fileReader.readAsDataURL(image);
        }
        console.log(image);

    }

    const joinGroupsubmit = async (groupId) => {
        await joinGroup(groupId)
        setJoinedStatus(true)
    }
    const handleJoinStatus = () => {
        setJoinedStatus(!joinedStatus)
    }
        

    const handleSubmit = async () => {
        console.log("submit")
        try {
            if (newGroup.name=== ''){
                alert("please enter a valid input")
            }
        
            else{
                await createGroup({groupName: newGroup.name, description: newGroup.description, groupImage: newGroup.image});
                setNewGroup({
                    name: '',
                    image: '',
                    description: ''
                });
                setCreateStatus(!createStatus);
                setSubmitted(true);
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    console.log("Groups in StudyGroup:",newGroup); 

    return (
        <div className='main-container'>
            <Navbar />
            {joinedStatus ? 
                <StudyGroup 
                    status={myGroup}
                    handleJoinStatus={handleJoinStatus}
                />
            
            :<div className="div1">
                <div className="div2">
                    {/* this will a over lay with z- index of 1 */}
                    {createStatus ? 
                    <div className='create-group-container'> 
                        <div className="button-holder"> <button onClick={()=>setCreateStatus(false)} id="create-group-small">X</button></div>
                        <input
                            placeholder='Name of the Group'
                            type='text'
                            value={newGroup.name}
                            onChange={nameInputs}
                        />
                        <img src={newGroup.image} alt='uploaded image' id='uploaded-img'/>
                        <input
                            type='file'
                            onChange={imageInputs}
                            accept='image/*'
                            multiple={false}
                        />
                        {/* <select>
                            <option></option>
                        </select> */}
                        <input id="textarea"
                            placeholder='Description (Optional)'
                            type='text'
                            value={newGroup.description}
                            onChange={descriptionInputs}
                        />
                        <button type='button' onClick={handleSubmit} id="group-submit">Create</button>
                        </div>
                    : 
                    <div>
                          <button type='button' id="create-group" onClick={()=>setCreateStatus(!createStatus)}>Create Group</button>
                    </div>}
                </div>
                 <JoinGroup
                    status={myGroup}
                    joinGroupsubmit={joinGroupsubmit}
                />
                
            </div>}
        </div>
    );

};
export default StudyBase;