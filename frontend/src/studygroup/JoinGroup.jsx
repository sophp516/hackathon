/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './StudyBase.css'
import useGetGroup from '../hooks/useGetGroup';

const JoinGroup = (props) => {

    const { groups } = useGetGroup();
    const handleStatus = (groupId) => {
        props.joinGroupsubmit(groupId)
    }

    return (
        <div className='join-root-container'>
            {groups.map((group)=> ( 
                <div className='group-container' key={group._id}>
                    <div >
                        <h2>{group.groupName}</h2>
                        <img src={group.image}/>
                        <p>{group.description}</p>
                    </div>

                    <button type='button' onClick={() => handleStatus(group._id)}>Enter group</button>
                </div>


            ))}
        </div>
    )

}
export default JoinGroup
