/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react';
import MockUsers from './mockUsers';
import './Leaderboard.css';

const Leaderboard = (props) => {
    const [leaderboard, setLeaderboard] = useState([]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
    
        const formatNumber = (number) => (number < 10 ? `0${number}` : number);
    
        return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    };
    
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
                            <span className="rank-css">{user.rank}   </span>
                            <span>{user.avatar}   </span>
                            <span>{user.name}   </span>
                            <span>{formatTime(user.time)}</span>
                        </div>
                      
                        
                    </div>
                ))}
            
            </div>


        </div>
    )




}
export default Leaderboard;