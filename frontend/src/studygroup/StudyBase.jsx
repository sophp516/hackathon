/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MockData from './mockdata.jsx';
import JoinGroup from './JoinGroup.jsx';
import './StudyBase.css';

const StudyBase = () => {
    const [joinedStatus, setJoinedStatus] = useState(false);
    const [groups,setGroups] = useState(MockData.groups);
    
    const handleStatus = () => {
        setJoinedStatus(!joinedStatus);
    }

    console.log("Groups in StudyGroup:", groups); 

    return (
        <div className='main-container'>
            <p>Hello</p>
            {joinedStatus ? 
                <div className='joining-page'>
                    <p> You joined a group</p>
                    <button type='button' onClick={handleStatus}> join</button>
                </div> 
            :<div>
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