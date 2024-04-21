const useUpdateTime = () => {

    const updateTime = async (elapsedTime) => {

    try {
        const res = await fetch("/api/user/updatetime", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({elapsedTime})
        })

        const data = await res.json()
        if(data.error) {
            throw new Error(data.error)
        }

        } catch(error) {
        console.log(error.message)
        } 
    }
    return { updateTime }
}

export default useUpdateTime;