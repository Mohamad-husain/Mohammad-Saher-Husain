import express from "express";
import RestaurantModel from'../models/Restaurant.js';

const router = express.Router();

router.get('/getRestaurant', async (req, res) => {
    const restaurants = await RestaurantModel.find();
    res.json(restaurants)
})
export default router;