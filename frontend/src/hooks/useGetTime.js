import { useState, useEffect } from "react"

const useGetTime= () => {
    const [elapsedTimed, setElapsedTimed] = useState(0);

    useEffect(() => {
        const getTime = async () => {
            try {
                const res = await fetch('api/user/gettime')
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error)
                }
                setElapsedTimed(data.time);
            } catch(err) {
                console.log(err.message);
            }
        }
        getTime();
    }, [])
    return { elapsedTimed }
}

export default useGetTime;