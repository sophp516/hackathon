import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const useLogout = () => {
    const {setAuthUser} = useAuthContext()

    const logout = async () => {

        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {"Content-Type": "application/json"}
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("darthrift-user")
            setAuthUser(null)
        } catch(error) {
            console.log(error.message)
        } 
    }
    return { logout };
}

export default useLogout