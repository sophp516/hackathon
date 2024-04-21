/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useJoinGroup from '../hooks/useJoinGroup.js';
import JoinGroup from './JoinGroup.jsx';
import StudyGroup from './StudyGroup.jsx';
import './StudyBase.css';
import useGetMyGroup from '../hooks/useGetMyGroup.js';
import useCreateGroup from '../hooks/useCreateGroup.js';

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
            <p>Hello</p>
            {joinedStatus ? 
            <div>
                <StudyGroup 
                    status={myGroup}
                    />
                </div>
            :<div>
                <div>
                    {/* this will a over lay with z- index of 1 */}
                    {createStatus ? 
                    <div className='create-group-container'> 
                        <button onClick={()=>setCreateStatus(false)}>X</button>
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
                        <input
                            placeholder='Description'
                            type='text'
                            value={newGroup.description}
                            onChange={descriptionInputs}
                        />
                        <button type='button' onClick={handleSubmit}>Create</button>
                        </div>
                    : 
                    <div>
                          <button type='button' onClick={()=>setCreateStatus(!createStatus)}>Create Group</button>
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