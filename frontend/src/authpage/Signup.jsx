/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import './Signup.css'

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const { signup } = useSignup();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(prevUser => ({ 
            ...prevUser, 
            [name]: value,
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signup(user)
    }

    return (
        <div className='signup-root-container'>
            <div className='signup-left-container'>

            </div>
            <div className="signup">
            <h1>Sign up</h1>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="label-container">
                        <input placeholder="email" type="email" onChange={handleChange} name="email" value={user.email}></input>
                    </div>
                    <div className="label-container">
                        <input placeholder="username" type="text" onChange={handleChange} name="username" value={user.username}></input>
                    </div>
                    <div className="label-container">
                        <input placeholder="password (at least 6 characters)" type="password" onChange={handleChange} name="password" value={user.password}></input>
                    </div>
                    <div className="label-container">
                        <input placeholder="confirm password" type="password" onChange={handleChange} name="confirmPassword" value={user.confirmPassword}></input>
                    </div>
                    <button id="login-button-v2">Create an account</button>
                </form>
                <div className="buttonContainer">
                    <Link to="/login"><button id="signup-button-v2">Already have an account?</button></Link>
                </div>
            </div>
        </div>
    </div>
    )
} 

export default Signup;
