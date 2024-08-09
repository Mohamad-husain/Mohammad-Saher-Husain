import express from "express";
import PlacesModel from '../models/Places.js';

const router = express.Router();

router.get('/search/:key', async (req, res) => {
    let data = await PlacesModel.find({
        abbreviation: req.params.key
    });
    return res.json(data);
});
export default router;