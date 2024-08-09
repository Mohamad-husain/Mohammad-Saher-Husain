import express from "express";
import bcrypt from 'bcrypt';
import SignupModel from '../models/Signup.js';
const router = express.Router();

router.post('/Createacount', async (req, res) => {
    const { username, email, password, confirmPassword, country } = req.body;

    try {
        const existingUser = await SignupModel.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'Email already use' });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const confirmPasswordHash = await bcrypt.hash(confirmPassword, 10);

        const newUser = new SignupModel({
            username,
            email,
            password: passwordHash,
            confirmPassword: confirmPasswordHash,
            country
        });

        const savedUser = await newUser.save();
        res.json({ message: 'Account created successfully', user: savedUser });
    } catch (err) {

        res.json({ message: 'Internal Server Error' });
    }
});

export default router;