import express from "express";
import bcrypt from 'bcrypt';
import SignupModel from '../models/Signup.js';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await SignupModel.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid username or password");
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = jwt.sign({ _id: user._id }, 'privateKey');
            res.send({ 
                token, 
                username: user.username, 
                uploadedImageUrl: user.uploadedImageUrl, 
                uploadProfile: user.uploadProfile, 
                bio: user.bio, 
                country: user.country 
            });
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send("Internal Server Error");
    }
});


router.put('/updateProfile/:token', async (req, res) => {
    const { email, uploadedImageUrl, uploadProfile, userName, bio, country } = req.body;
    const { token } = req.params;  // Get token from req.params
    const decodedToken= jwt.verify(token,'privateKey');
    try {
        const user = await SignupModel.findOne({ _id:decodedToken._id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.email = email || user.email;
        user.username = userName || user.username;
        user.uploadedImageUrl = uploadedImageUrl || user.uploadedImageUrl;
        user.uploadProfile = uploadProfile || user.uploadProfile;
        user.bio = bio || user.bio;
        user.country = country || user.country;
        await user.save();
        res.json({ message: 'Profile updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


router.get('/getUserData/:token', async (req, res) => {
    try {
        const { token } = req.params;  
        const decodedToken= jwt.verify(token,'privateKey');
        const user = await SignupModel.findOne({ _id:decodedToken._id });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'Profile updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;