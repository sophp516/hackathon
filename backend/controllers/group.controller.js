import Group from "../models/group.model.js";
import User from "../models/user.model.js";

export const creategroup = async (req, res) => {
    try {
        const { groupName } = req.body;
        const group = await User.findOne({groupName});
        if (group) {
            return res.status(400).json({error: "Group name already exists"})
        }
        const createrId = req.user._id

        const newGroup = new Group({
            groupName,
            members: [createrId],
        })

        await newGroup.populate('members').execPopulate();
        return res.status(201).json({ message: "Group created successfully" });


    } catch(err) {
        console.error("Error creating group:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const joingroup = async (req, res) => {
    try {
        const { groupId } = req.body;
        const userId = req.user._id
    
        const group = await User.findOne({ _id: groupId });

        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        group.members.push(user);
        await group.save();

        res.status(200).json({ message: 'User added to group', group });
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }

}