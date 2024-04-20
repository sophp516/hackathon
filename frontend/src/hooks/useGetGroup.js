import { useState, useEffect } from "react"

const useGetGroup = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const getAllGroups = async () => {
            try {
                const res = await fetch('/api/studygroup/getgroups');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setGroups(data)
            } catch(err) {
                console.log(err.message);
            }
        }
        getAllGroups();
    }, [])
    return { groups }
}

export default useGetGroup;