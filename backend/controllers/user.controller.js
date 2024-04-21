import User from "../models/user.model.js";
import Task from "../models/task.model.js";

export const getUserAvatar = async (req, res) => {
    const userId = req.user._id

    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const avatarUrl = user.avatar;
        res.status(200).json({ url: avatarUrl });
        return avatarUrl;
    } catch (err) {
        console.log(err.message)
    }
}

export const updateTime = async (req, res) => {
    try {
        const userId = req.user._id
        const { elapsedTime } = req.body;
    
        const user = await User.findByIdAndUpdate(
            userId,
            { $set: { studyTime: elapsedTime } },
            { new: true }
        );

        res.status(200).json({ message: 'Time updated' });

    } catch(err) {
        console.log(err.message)
    }
}

export const getTime = async (req, res) => {
    try {
        const userId = req.user._id

        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json({ time: user.studyTime });
    } catch (err) {
        console.log(err.message)
    }
}

export const addTask = async (req, res) => {
    try {
        const userId = req.user._id;
        const { taskName, dueDate } = req.body;

        // Create a new task using the Task model
        const newTask = await Task.create({
            task: taskName,
            dueDate: dueDate,
        });

        // Find the user by ID and push the new task to the task array
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { task: newTask._id } },
            { new: true }
        );

        res.status(200).json({ message: 'Task added successfully', task: newTask });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}