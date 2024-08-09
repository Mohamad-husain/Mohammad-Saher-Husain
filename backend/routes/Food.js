import express from "express";
import FoodModel from'../models/Food.js';

const router = express.Router();

router.get('/getFood', async (req, res) => {

    try {
        const Food = await FoodModel.find();
        res.json(Food);
    } catch (err) {
        console.error('Error fetching places  info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;