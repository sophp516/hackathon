/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Leaderboard from '../components/Leaderboard';
import useGetMembers from '../hooks/useGetMembers';
import useLeaveGroup from '../hooks/useLeaveGroup';
import Avatar from '../avatar/avatar';
import './StudyGroup.css'

const StudyGroup = (props) => {
    const [groupId, setGroupId] = useState('');
    const { members } = useGetMembers(groupId);
    const { leaveGroup } = useLeaveGroup();
    const [leave, setleave] = useState(false);
    const [coordinates, setCoordinates] = useState({
        x: '',
        y: '',
    });
    const[select, selectStatus] = useState(false);
    const [testUsers, setTestUsers] = useState([
        {
            name: "joyce",
            avatar: "./assets/redpanda.png",
            x: 50,
            y: 100,
        },
        {
            name: "ranom",
            avatar: "./assets/redpanda.png",
            x: 200,
            y: 100,
        }
    ])

    console.log(members)
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
    
    const selectAvatar = (e) => {
        
    }

    return (
        <div className='group-container'>
            <button onClick={handleLeaveGroup}>leave</button>
            {testUsers.map((user,index)=> ( 
                <img key={index} src={user.avatar} id='avatar'/>

            
            )
            )}



           
            <Leaderboard 
                members={members} 
                />
        </div>
    );
};

export default StudyGroup;