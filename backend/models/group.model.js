import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    groupName: {
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true})

const Group = mongoose.model("Group", groupSchema);

export default Group;