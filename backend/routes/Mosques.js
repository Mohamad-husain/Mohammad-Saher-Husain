import express from "express";
import mosquesModel from "../models/Mosques.js";

const router = express.Router();

router.get("/getMosques", async (req, res) => {
  const mosques = await mosquesModel.find({});
  res.json(mosques);
});
export default router;
