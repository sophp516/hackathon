/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const JoinGroup = (props) => {


    return (
        <div className='main-container'>
            {props.groups.map((group)=> ( 
                <div className='group-container' key={group.id}>
                </div>


            ))}



        </div>
    )

}
export default JoinGroup
