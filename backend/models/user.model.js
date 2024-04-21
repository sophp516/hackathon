import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
        ref: "Group",

    },
    studyTime: {
        type: Number,
        default: 0
    },
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    coordinates: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            default: [-1, -1]
        }
    }
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;