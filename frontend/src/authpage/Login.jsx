import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../hooks/useLogin.js';
import "./Login.css"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { loading, login } = useLogin()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(prevUser => ({ 
            ...prevUser, 
            [name]: value,
        })) 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(user.email, user.password)
        console.log("success")
    }

    return (
        <div className='login-root-container'>
        
        <div className='login-left-container'>
            <img src='/assets/boy.png' alt='image' id='guy-img'/>
        </div>
        <div className="login">
            <h1>Welcome Back!</h1>
            <p id='welcome-message'>Login to see your study groups and begin a session</p>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="label-container">
                        <input placeholder="email" type="email" onChange={handleChange} name="email" value={user.email}></input>
                    </div>
                    <div className="label-container">
                        <input placeholder="password" type="password" onChange={handleChange} name="password" value={user.password}></input>
                    </div>
                    <button id="login-button" disabled={loading}>{!loading ? "Log in" : <i className="pi pi-spin pi-spinner"></i>}</button>
                </form>
                <div className="buttonContainer">
                    <Link to="/signup"><button id="signup-button-v2">{"Don't"} have an account?</button></Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login; 