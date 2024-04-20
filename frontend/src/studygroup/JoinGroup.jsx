/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 

const JoinGroup = (props) => {

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        setGroups(props.groups);
    }, [props.groups]); // Add props.groups as a dependency

    console.log(props.joinedStatus);
    return (
        <div className='main-container'>
            {groups.map((group)=> ( 
                <div className='group-container' key={group.id}>
                    <div >
                        <h2>{group.name}</h2>
                        <img src={group.image}/>
                        <p>{group.subject}</p>
                    </div>

                    <button type='button' onClick={props.handleStatus}>Enter group</button>
                </div>


            ))}
        </div>
    )

}
export default JoinGroup
