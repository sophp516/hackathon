/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";
// import useGetAvatar from "../hooks/useGetAvatar.js";
import Navbar from "../navbar/navbar.jsx";
import './Homepage.css'

const Homepage = () => {
    // const { logout } = useLogout();

    // const LogoutButton = () => {
    //     return (
    //         <div>
    //             <button className="homepage-button"onClick={logout}>log out</button>
    //         </div>
    //     )
    // }
    return (
        <div className="home-root">
        <div className="homepage-main-container">
            <div className="nav-bar-container">
                <Navbar className="nav-bar"/>
            </div>
            <div className="homepage-content">
                <div className="left-column-container">
                    <div className="left-coloum-text">
                        <h1 className="homepage-header">
                            <span>W</span>
                            <span>e</span>
                            <span>l</span>
                            <span>c</span>
                            <span>o</span>
                            <span>m</span>
                            <span>e</span>
                            <span> </span>
                            <span>b</span>
                            <span>a</span>
                            <span>c</span>
                            <span>k</span>
                            <span>!</span>
                            </h1> {/* Welcome message here */}
                        {/* <h1 className="homepage-header">Welcome back!</h1> Welcome message here */}
                        <h3 className="homepage-text">Seize the day and get some studying done.</h3> {/* Text here */}
                    </div >
                    <div className="left-wrapper">
                        <div className="avatar-container-home">
                            <div className="avatar-header">
                                <h2>Your avatar</h2>
                            <div className="avatar-images">
                                <img src="src/assets/default.png" id="avatar-img"/>
                                <img src="/assets/quote.png" id="avatar-img"/>
                            </div>
                        </div>
                        </div>
                        <div className="study-group-container"> 
                            <div className="sg-header">
                                <h2>Your Study Group</h2>
                            </div>
                            <div className="study-info">
                                <img src="/assets/panda3.png" id="study-image"/>
                                <p>CS10 study group!</p>
                                <p>meets every week in berry 171c</p>
                            </div>
                        </div>
                   
                </div>
            </div>
                <div className="right-column">
                    <div className="time-container">
                        <Timer className="timer-component" />
                    </div>
                    <div className="task-container">
                        <TaskManager />
                    </div>
                    {/* <LogoutButton /> */}
                </div>
            </div>
           
        </div>
    </div>

    )
}

export default Homepage;