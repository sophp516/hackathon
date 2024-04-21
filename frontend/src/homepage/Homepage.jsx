import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";

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
        <div>
            <p>home</p>
            <Timer />
            <TaskManager />
            <LogoutButton />
        </div>

    )
}

export default Homepage;
