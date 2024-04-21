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
    const[select, setSelect] = useState(false);
    const [selectedName, setName] = useState('');
    const [users, setUsers] = useState([
        {
            name: "joyceeee",
            avatar: "./assets/redpanda.png",
            x: 50,
            y: 155
            ,
        },
        {
            name: "ranom",
            avatar: "./assets/redpanda.png",
            x: 200,
            y: 100,
        }
    ])

    const handleLocation = (event) => {
        if (select === true) {
            const updatedUsers = users.map((user) => {
                if (user.name === selectedName) {
                    return { ...user, x: event.clientX, y: event.clientY };
                }
                return user;
            });
            setUsers(updatedUsers);
            // Update the coordinates state if necessary
            // setCoordinates({ x: event.clientX, y: event.clientY }); 
        }
        // Reset the selected avatar after setting the position
        setSelect(false);
        setName('');
    };
    
   
    useEffect(() => {
       
        window.addEventListener('click', handleLocation); // listens for clicks, and send coordinates to handler

        return () => { // remove listener once a click is detected
            window.removeEventListener('click', handleLocation);
        };
    
    }, [select]);

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
    
    const selectAvatar = (event) => {
        setSelect(!false); // select and unselect
        setName(event); //name of user
       
    }
    

    return (
        <div className='group-container'>
            <button onClick={handleLeaveGroup}>leave</button>
            {users.map((user, index) => (
            user.avatar ? ( // Check if `avatar` property exists
                <img key={index}
                     src={user.avatar}
                     style={{ position: 'absolute', left: `${user.x}px`, top: `${user.y}px` }}
                     id='avatar'
                     onClick={(e) => selectAvatar(user.name)}
                />
            ) : null // Handle the case where `avatar` is not defined
        ))}



           
            <Leaderboard 
                members={members} 
                />
        </div>
    );
};

export default StudyGroup;