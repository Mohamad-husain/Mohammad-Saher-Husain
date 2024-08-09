import express from "express";
import bcrypt from 'bcrypt';
import SignupModel from '../models/Signup.js';

import { customAlphabet } from 'nanoid';
import { sendEmail } from '../sendEmail.js';     

const router = express.Router();

export const ForgotPassword = async (req, res) => {
    const { email } = req.body;
    console.log('Received email:', email); 
    try {
        const RandomCode = customAlphabet('1234567890', 6);
        const codeToSend = RandomCode();
        console.log('Generated code:', codeToSend);

        const user = await SignupModel.findOneAndUpdate(
            { email },
            { sendCode: codeToSend },
            { new: true }
        );

        if (!user) {

            console.error('User not found for email:', email); 
            return res.status(404).json({ message: 'User not found' });
        }

        await sendEmail(email, 'Reset Password',
        `
        <h1 style="text-align: center; "> Secret Of Cities </h1>
        <p style="text-align: center; "> very confidential <br>
        Please do not give this code to anyone to ensure the privacy of your accounts.</p>
        
        <h1 style="text-align: center; "> ${codeToSend} </h1>
        
        <p style="text-align: center; "> Thank you for being part of the <b>Secret Of Cities</b> family. Have a nice day </p>
        `);

        console.log('Email to : ', email);  
        return res.status(200).json({ message: 'Success', codeToSend });
    } catch (err) {
        console.error('Error forgot password:', err); 
        res.status(500)
        .json({ 
            message: 'Error' , err
        });
    }
};
router.post('/ForgotPassword', ForgotPassword); 
router.post('/verifyCode', async (req, res) => {

    const { codeInData } = req.body; 
    try {
        const user = await SignupModel.findOne({ sendCode: codeInData });
        if (!user) {
            return res.status(400)
            .json({ 
                message: 'Invalid code' 
            });
        }
        return res.status(200)
        .json({
            message: 'Code verified' 
        });
    } catch (err) {
        console.error('Error', err);
        res.status(500)
        .json({ 
            message: 'Error'
        });
    }
});
router.post('/api/auth/users', async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        const user = await SignupModel.findOne({ email });
        if (!user) {
            return res.json({ mess: 'Email not found. Password has not been changed.' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
});
export default router;