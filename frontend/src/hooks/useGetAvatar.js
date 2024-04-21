import { useState, useEffect } from "react"

const useGetAvatar = () => {
    const [url, setUrl] = useState([]);

    useEffect(() => {
        const getAvatar = async () => {
            try {
                const res = await fetch('/api/user/getavatar');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setUrl(data)
            } catch(err) {
                console.log(err.message);
            }
        }
        getAvatar();
    }, [])
    return { url }
}

export default useGetAvatar;