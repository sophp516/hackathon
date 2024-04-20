/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useGetGroup from '../hooks/useGetGroup';

const JoinGroup = (props) => {

    const { groups } = useGetGroup();
    const handleStatus = (groupId) => {
        props.handleStatus(groupId)
    }

    return (
        <div className='main-container'>
            {groups.map((group)=> ( 
                <div className='group-container' key={group._id}>
                    <div>
                        <h2>{group.groupName}</h2>
                        <img src={group.groupImage}/>
                        <p>{group.description}</p>
                    </div>

                    <button type='button' onClick={() => handleStatus(group._id)}>Enter group</button>
                </div>


            ))}
        </div>
    )

}
export default JoinGroup
