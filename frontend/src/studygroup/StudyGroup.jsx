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
    const [selectedName, setName] = useState('joyce');
    const [users, setUsers] = useState([
        {
            name: "joyce",
            avatar: "./assets/redpanda.png",
            x: 50,
            y: 155
            ,
        },
        {
            name: "ranom",
            avatar: "./assets/redpanda.png",
            x: 500,
            y: 300,
        }
    ])

    
   
    useEffect(() => {
        const handleLocation = (event) => {
            if (select) { // Make sure this is true when an avatar is selected
                const updatedUsers = users.map(user => {
                    if (user.name === selectedName) {
                        return { ...user, x: event.clientX, y: event.clientY };
                    }
                    return user;
                });
                setUsers(updatedUsers);
                setSelect(false); // Reset select status after positioning
            }
        };
    
        // Attach the event listener to the window only if an avatar is selected
        if (select) {
            window.addEventListener('click', handleLocation);
        }
    
        return () => {
            if (select) {
                window.removeEventListener('click', handleLocation);
            }
        };
    }, [select, users, selectedName]); 

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
    
    const selectAvatar = (name, event) => {
        event.stopPropagation(); // Prevent the document-level click handler from firing immediately.
        if (selectedName === name && select) {
            setSelect(false);
            setName(''); // Deselect the avatar
        } else {
            setSelect(true);
            setName(name); // Select the new avatar
        }
    };

    return (

        <div>
            <img src="src/assets/map.png" id="map"/>
        <div className="studyspace-big-div">
            <button onClick={handleLeaveGroup} id="create-group" >leave</button>

            {users.map((user, index) => (
            user.avatar ? ( // Check if `avatar` property exists
                <div key={index} className='avatar-container' 
                 style={{ position: 'absolute', left: `${user.x}px`, top: `${user.y}px` }}>
                    <img
                        src={user.avatar}
                        id='avatar'
                        onClick={(e) => selectAvatar(user.name,e)}
                    />
                    <p>{user.name}</p>
                </div>
                
            ) : null // Handle the case where `avatar` is not defined
        ))}



           
            <Leaderboard 
                members={members} 
                />
          
        </div>
        </div>
       
    );
};

export default StudyGroup;