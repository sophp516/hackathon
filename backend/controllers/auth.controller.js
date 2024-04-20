import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import newtoken from "../utils/token.js";

export const signup = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (password != password) {
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({error: "Username already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        if (newUser) {
            newtoken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username,
            })
        }
    } catch(err) {
        res.status(500).json({error: "Internal server error"})
        console.log(err.message)
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message: "Logged out successfully"})
    } catch(err) {
        console.error(err);
        res.status(500).json({error: "Internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({ error: "User not found"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials"})
        }

        newtoken(user._id, res)
        res.status(200).json({
            _id: user._id,
            email: user.email,
            username: user.username,
        })

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error"})
    }
}