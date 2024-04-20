import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        name: "joyce"
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    avatar: {
        type: String,
        default: ""
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    studyTime: {
        type: Number,
        default: 0
    },
    task: [
        {
            type: String,
            default: []
        }
    ],
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;