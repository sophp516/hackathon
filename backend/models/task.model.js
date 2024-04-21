import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }, 
    dueDate: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

const Task = mongoose.model("Task", taskSchema);

export default Task;