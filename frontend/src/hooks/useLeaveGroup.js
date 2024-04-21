const useLeaveGroup = () => {
    const leaveGroup = async () => {
        try {
            const response = await fetch('/api/studygroup/leavegroup');
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error)
            }
        } catch(err) {
            console.log(err.message)
        }
    }
    return { leaveGroup };
}

export default useLeaveGroup;