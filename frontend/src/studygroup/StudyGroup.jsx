/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const StudyGroup = (props) => {
    
    const [groupId, setGroupId] = useState('')
    console.log(groupId)

    useEffect(() => {
        setGroupId(props.status);
    })
    
    return (
        <p>space</p>
    )



}
export default StudyGroup;