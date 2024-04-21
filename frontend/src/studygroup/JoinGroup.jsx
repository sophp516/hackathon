/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './StudyBase.css'
import useGetGroup from '../hooks/useGetGroup.js';
import './StudyBase.css';
const JoinGroup = (props) => {

    const { groups } = useGetGroup();
    const handleStatus = (groupId) => {
        props.joinGroupsubmit(groupId)
    }
    console.log(groups)

    return (
        <div className='join-root-container'>
            {groups && groups.map((group)=> ( 
                <div className='group-container' key={group._id}>
                    <div className="group-details">
                        <h2>{group.groupName}</h2>
                        <img id="groupImage" src={group.groupImage}/>
                        <p>{group.description}</p>
                    </div>

                    <button type='button' id="enter-group" onClick={() => handleStatus(group._id)}>Enter group</button>
                </div>


            ))}
        </div>
    )

}
export default JoinGroup
