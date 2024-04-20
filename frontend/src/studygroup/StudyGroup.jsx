/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MockData from './mockdata';
import JoinGroup from './JoinGroup';

const StudyGroup = () => {
    const [joinedStatus, setJoinedStatus] = useState(true);
    const [groups,setGroups] = useState(MockData.groups);

    const handleStatus = () => {
        setJoinedStatus(!joinedStatus);
    }

    return (
        <div>
            {joinedStatus ? 
                <div className='joining-page'>
                    <JoinGroup
                        status = {joinedStatus}
                        groups = {groups}
                    />

                </div> 
            :<div></div>}
            

        </div>
    )

}
export default StudyGroup