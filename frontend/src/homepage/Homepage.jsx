import useLogout from "../hooks/useLogout.js";

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
            <LogoutButton />
        </div>

    )
}

export default Homepage;
