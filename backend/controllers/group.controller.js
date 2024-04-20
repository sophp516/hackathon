import Group from "../models/group.model.js";
import User from "../models/user.model.js";

export const creategroup = async (req, res) => {
    try {
        const { groupName, description, groupImage } = req.body;
        const group = await Group.findOne({groupName});
        if (group) {
            return res.status(400).json({error: "Group name already exists"})
        }
        const createrId = req.user._id

        const newGroup = new Group({
            groupName,
            members: [createrId],
            description,
            groupImage
        })

        await newGroup.save();
        return res.status(201).json({ message: "Group created successfully" });


    } catch(err) {
        console.error("Error creating group:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const joingroup = async (req, res) => {
    try {
        const { groupId } = req.body;
        const userId = req.user._id
    
        const group = await Group.findOne({ _id: groupId });

        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        const user = await User.findByIdAndUpdate(
            userId,
            { $set: { group: groupId } },
            { new: true }
        );

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

export const getgroups = async (req, res) => {
    try {
        const allGroup = await Group.find()
        if (!allGroup) return res.status(200).json([])
        res.status(200).json(allGroup)
    } catch(err) {
        console.log(error)
        res.status(500).json({error: "Internal server error"})
    }
}

export const getmygroup = async (req, res) => {
    try {
        const userId = req.user._id
        const user = await User.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!user.group) {
            return res.status(404).json({ error: 'User is not part of any group' });
        }

        return res.status(200).json({ group: user.group });
    } catch (err) {
        console.error('Error fetching user group:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getmembers = async (req, res) => {
    try {
        const { groupId } = req.body;
        const group = await Group.findById(groupId).populate('members');

        if (!group) {
            return res.status(404).json({ error: 'Group not found' });
        }
        const members = group.members;
        return res.status(200).json({ members });
    } catch (err) {
        console.error('Error fetching group members:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

}