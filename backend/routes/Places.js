import express from "express";
import PlacesModel from '../models/Places.js';

const router = express.Router();

router.get('/getPlaces', async (req, res) => {

    try {
        const allPlaces = await PlacesModel.find();
        res.json(allPlaces);
    } catch (err) {
        console.error('Error fetching places  info:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
export default router;