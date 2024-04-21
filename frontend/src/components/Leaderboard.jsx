/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react';
import MockUsers from './mockUsers';
import './Leaderboard.css';

const Leaderboard = (props) => {
    const [leaderboard, setLeaderboard] = useState([]);
    
    useEffect(() => {
        const sortedUsers = props.members.sort((a, b) => b.studyTime - a.studyTime);
        const extractInfo = sortedUsers.map((user,index) => ({
            name: user.username,
            time: user.studyTime,
            avatar: user.avatar,
            rank: index + 1
        }));
        setLeaderboard(extractInfo);
    }, [props.members]); //depends on user data

    return(
        <div className='leaderboard-container'>
            <h2>Leaderboard</h2>
            <div className='rank-container'>  
                {leaderboard.map(user => (
                    <div className='individuals' key={user}>
                        <div className='individual-info'> 
                            <span>{user.rank}   </span>
                            <span>{user.avatar}   </span>
                            <span>{user.name}   </span>
                            <span>{user.time} minutes</span>
                        </div>
                      
                        
                    </div>
                ))}
            
            </div>


        </div>
    )




}
export default Leaderboard;