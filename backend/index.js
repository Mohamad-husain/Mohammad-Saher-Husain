import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

import KnowTheUnkown from "./routes/KnowTheUnkow.js";
import Guide from "./routes/Guides.js";
import Signup from "./routes/SignUp.js";
import Places from "./routes/Places.js";
import SignIn from "./routes/SignIn.js";
import Resturant from "./routes/Resturant.js";
import HomePage from "./routes/HomePage.js";
import Profile from "./routes/Profile.js";
import Forgetpass from "./routes/ForgitPass.js";
import mosques from "./routes/Mosques.js";
import Food from './routes/Food.js';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(KnowTheUnkown);
app.use(Guide);
app.use(Signup);
app.use(Places);
app.use(SignIn);
app.use(Resturant);
app.use(HomePage);
app.use(Profile);
app.use(Forgetpass);
app.use(mosques);
app.use(Food);
mongoose.connect(process.env.MONGODB_URI).then(() => 
{
    console.log("Connected Successfully to DB");
    app.listen(PORT, () => 
    {
      console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => 
{
    console.log("Error connecting to DB: ", error);
});
