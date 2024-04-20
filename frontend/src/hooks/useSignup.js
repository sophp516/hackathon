import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {

    const {setAuthUser} = useAuthContext()

    const signup = async ({email, username, password, confirmPassword}) => {
        const success = handleInputErrors({email, username, password, confirmPassword})
        if (!success) return

    try {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({email, username, password, confirmPassword})
        })

        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }

        localStorage.setItem("study-group", JSON.stringify(data))
        setAuthUser(data)

        } catch(error) {
        console.log(error.message)
        } 
    }
    return { signup }
}

export default useSignup;

function handleInputErrors({email, username, password, confirmPassword}) {
    if(!email || !username || !password || !confirmPassword) {

        return false
    }

    if (password !== confirmPassword) {

        return false
    }

    if (password.length < 6) {

        return false
    }
    return true
}