import { useState, useEffect } from "react"

const useAddTask = () => {
    
    const addTaskf = async (task, dueDate) => {

        try {
            const res = await fetch("/api/user/addtask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({taskName: task, dueDate})
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

        } catch (error) {
            console.log(error)  
        } 
    }
    return { addTaskf }
}

export default useAddTask;