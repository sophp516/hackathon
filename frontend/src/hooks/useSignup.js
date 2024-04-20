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
        console.log("Please fill in all fields")
        return false
    }

    if (password !== confirmPassword) {
        console.log("passwords do not match")
        return false
    }

    if (password.length < 6) {
        console.log("Password must be at least 6 characters")
        return false
    }
    return true
}