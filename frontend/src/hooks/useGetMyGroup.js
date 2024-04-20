import { useState, useEffect } from "react"

const useGetMyGroup = () => {
    const [myGroup, setMyGroup] = useState('')

    useEffect(() => {
        const getMyGroup = async () => {
            try {
                const res = await fetch('/api/studygroup/getmygroup');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMyGroup(data);
            } catch (error) {
                console.log(error.message)
            } 
        }
        getMyGroup();
    },[])

    return { myGroup }
}

export default useGetMyGroup;