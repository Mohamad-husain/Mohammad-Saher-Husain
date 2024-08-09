import express from "express";
import ProfilesModel from '../models/Profiles.js';

const router = express.Router();

router.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new ProfilesModel(user);
    await newUser.save();
    return res.json(user);
})

router.get('/getUsers1',  async (req, res) => {
    try {
        const allusers = await usersModel.find();
        res.json(allusers);
    } catch (err) {
        console.error('Error fetching Users info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    } 
});

export default router;