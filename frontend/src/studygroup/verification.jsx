/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Verification = () => {
    const [input, setInput] = ('');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className='verification-container'>

            <input 
                type='text'
                placeholder='Enter Passkey'
                value = {input}
                onChange={handleInputChange}
             />

            <button type='button'> Enter </button>

        </div>
    )

}
export default Verification