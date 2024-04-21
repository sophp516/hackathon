import User from "../models/user.model.js";

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
    
}