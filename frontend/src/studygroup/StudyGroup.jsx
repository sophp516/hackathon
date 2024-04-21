/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Leaderboard from '../components/Leaderboard';
import useGetMembers from '../hooks/useGetMembers';
import useLeaveGroup from '../hooks/useLeaveGroup';
import "./StudyBase.css"


const StudyGroup = (props) => {
    const [groupId, setGroupId] = useState('');
    const { members } = useGetMembers(groupId);
    const { leaveGroup } = useLeaveGroup();
    const [leave, setleave] = useState(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        setGroupId(props.status.group);
    }, [props.status.group]);

    const handleLeaveGroup = async () => {
        try {
            await leaveGroup(); 
            props.handleJoinStatus();
            console.log('Left the group successfully.');
        } catch (error) {
            console.error('Error leaving group:', error);
        }
        navigateTo("/studybase")
        
    }

    return (
        <div>
            <img src="src/assets/map.png" id="map"/>
        <div className="studyspace-big-div">
            <button onClick={handleLeaveGroup} id="create-group" >leave</button>
            <Leaderboard 
                members={members} 
                />
          
        </div>
        </div>
    );
};

export default StudyGroup;