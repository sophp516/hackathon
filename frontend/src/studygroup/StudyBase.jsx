/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MockData from './mockdata.jsx';
import JoinGroup from './JoinGroup.jsx';
import './StudyBase.css';

const StudyBase = () => {
    const [joinedStatus, setJoinedStatus] = useState(false);
    const [groups,setGroups] = useState(MockData.groups);
    const [createStatus, setCreateStatus] = useState(false);
    const [newGroup, setNewGroup] = useState({
       
        id: -1,
        name: '',
        image: '',
        description: '',
        members: []
        
    });
    
    const handleStatus = () => {
        setJoinedStatus(!joinedStatus);
    }

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
        

    const handleSubmit = () => {
        if (newGroup.name=== ''){
            alert("please enter a valid input")
        }
        else{
            setNewGroup({
                name: '',
                image: '',
                description: ''
            });
            setCreateStatus(false);
            setJoinedStatus(true);
        }
     setCreateStatus(!createStatus);
    }



    console.log("Groups in StudyGroup:",newGroup); 

    return (
        <div className='main-container'>
            <p>Hello</p>
            {joinedStatus ? 
                <div className='joining-page'>
                    <p> You joined a group</p>
                    <button type='button' onClick={handleStatus}> join</button>
                </div> 
            :<div>
                <div>
                    {/* this will a over lay with z- index of 1 */}
                    {createStatus ? 
                    <div className='create-group-container'> 
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
                        <button type='button' onClick={()=>setCreateStatus(!createStatus)}>Create</button>
                        </div>
                    : 
                    <div>
                          <button type='button' onClick={()=>setCreateStatus(!createStatus)}>Create Group</button>
                    </div>}
                </div>
                 <JoinGroup
                    status={joinedStatus}
                    groups={groups}
                    handleStatus={handleStatus}
                />
                
            </div>}
        </div>
    );

};
export default StudyBase;