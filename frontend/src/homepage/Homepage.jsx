import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";
import useGetAvatar from "../hooks/useGetAvatar.js";
import './Homepage.css'

const Homepage = () => {
    const { logout } = useLogout();

    const LogoutButton = () => {
        return (
            <div>
                <button onClick={logout}>log out</button>
            </div>
        )
    }
    return (
        <div className="homepage-main-container">
            <img src="src/assets/default.png" />
            <Timer />
            <TaskManager />
            <LogoutButton />
        </div>

    )
}

export default Homepage;
