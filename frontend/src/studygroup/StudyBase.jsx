/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useJoinGroup from '../hooks/useJoinGroup.js';
import MockData from './mockdata.jsx';
import JoinGroup from './JoinGroup.jsx';
import StudyGroup from './StudyGroup.jsx';
import './StudyBase.css';
import useGetMyGroup from '../hooks/useGetMyGroup.js';

const StudyBase = () => {
    
    const [groups,setGroups] = useState(MockData.groups);
    const { joinGroup } = useJoinGroup();
    const { myGroup } = useGetMyGroup();
    console.log(myGroup);
    
    const handleStatus = async (groupId) => {
        await joinGroup(groupId);
    } 

    return (
        <div className='main-container'>
            <p>Hello</p>
            {myGroup ? 
                <p>hello</p>
            :<div>
                 <JoinGroup
                    status={myGroup}
                    groups={groups}
                    handleStatus={handleStatus}
                />
                
            </div>}
        </div>
    );

};
export default StudyGroup;