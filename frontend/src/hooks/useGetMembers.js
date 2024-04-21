import { useState, useEffect } from "react"

const useGetMembers = (groupId) => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const getMembers = async () => {
            try {
                const res = await fetch('/api/studygroup/getmembers', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ groupId })
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setMembers(data.members);
            } catch(err) {
                console.log(err.message);
            }
        }
        if (groupId) {
            getMembers();
        }
    }, [groupId])
    return { members }
}

export default useGetMembers;
