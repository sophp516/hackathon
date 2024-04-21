import { joingroup } from "../../../backend/controllers/group.controller"

const useJoinGroup = () => {
    const joinGroup = async (groupId) => {
        console.log(groupId)
        try {
            const res = await fetch("/api/studygroup/joingroup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({groupId})
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

        } catch(err) {
            console.log(err)
        }
    } 
    return { joinGroup }
}

export default useJoinGroup;
