import useLogout from "../hooks/useLogout.js";
import Timer from "../timer/Timer.jsx";
import TaskManager from "../taskmanager/App.jsx";
import useGetAvatar from "../hooks/useGetAvatar.js";
import './Homepage.css'

const Homepage = () => {
    const { logout } = useLogout();
    const { url } = useGetAvatar();
    const parts = url.url.toString().split("/");
    const fileName = parts[parts.length - 1];
    const newUrl = `/src/assets/${fileName}`;
    console.log(url)

    const LogoutButton = () => {
        return (
            <div>
                <button onClick={logout}>log out</button>
            </div>
        )
    }
    return (
        <div className="homepage-main-container">
            <img src={newUrl} />
            <Timer />
            <TaskManager />
            <LogoutButton />
        </div>

    )
}

export default Homepage;
