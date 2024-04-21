import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";
//import useGetAvatar from "../hooks/useGetAvatar.js";
import './Homepage.css'

const Homepage = () => {
    const { logout } = useLogout();

    const LogoutButton = () => {
        return (
            <div>
                <button className="homepage-button"onClick={logout}>log out</button>
            </div>
        )
    }
    return (
        <div className="homepage-main-container">
            /* Nav bar here */
            <div className="homepage-content">
                <div className="left-column">
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
                    <h3 className="homepage-text">So glad you're here. Seize the day and get some studying done.</h3> {/* Text here */}
                        <img src="src/assets/default.png" />
                        / * Study Group component * /
                </div>
                <div className="right-column">
                    <Timer className="timer-component" />
                    <TaskManager />
                    <LogoutButton />
                </div>
            </div>
        </div>

    )
}

export default Homepage;
