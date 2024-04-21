import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";
// import useGetAvatar from "../hooks/useGetAvatar.js";
import Navbar from "../navbar/navbar.jsx";
import './Homepage.css'

const Homepage = () => {
    const { logout } = useLogout();
    //const { url } = useGetAvatar();
    
    

    const LogoutButton = () => {
        return (
            <div>
                <button onClick={logout}>log out</button>
            </div>
        )
    }
    return (
        <div className="main-main-main">
            <Navbar />
            <div className="main-main-right">
                <img src="src/assets/default.png" />
                <Timer />
                <TaskManager />
                <LogoutButton />
            </div>
        </div>

    )
}

export default Homepage;
