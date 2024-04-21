const useCreateGroup = () => {

    const createGroup = async ({ groupName, description, groupImage }) => {
    
        const success = handleInputErrors({ groupName, description })
        if (!success) return

    try {
        const res = await fetch("/api/studygroup/creategroup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ groupName, description, groupImage })
        })

        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }

        } catch(error) {
        console.log(error.message)
        } 
    }
    return { createGroup }
}

export default useCreateGroup;

function handleInputErrors({ groupName, description }) {
    if(!groupName || !description) {
        console.log("Please fill in all fields")
        return false
    }
    return true
}