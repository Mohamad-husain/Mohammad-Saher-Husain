import React, { useState } from 'react';
import './ResetPassword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/users', { email, newPassword });
            if (response.data.message==='Password updated successfully'){
            alert(response.data.message);
            navigate('/login');}
            else{
                alert(response.data.mess);
            }
        } catch (err) {
            alert(err.response.data.message || 'Error resetting password');
        }
    };

    return (
        <div className='CenteredContainer'>
            <div className="container_resetPassword">
                <h1 className="header1_resetPassword">New Password</h1>
                <h5 className="header5_resetPassword">Create a new password that you don't use on other sites.</h5>
                <form onSubmit={handleSubmit}>
                    <label className="label_resetPassword">Email</label>
                    <input
                        type="email"
                        className="input_resetPassword"
                        name="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className="label_resetPassword">Create new password</label>
                    <input
                        type="password"
                        className="input_resetPassword"
                        name="newPassword"
                        placeholder='New password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <label className="label_resetPassword">Confirm your password</label>
                    <input
                        type="password"
                        className="input_resetPassword"
                        name="confirmPassword"
                        placeholder='Confirm your password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="button_resetPassword">Change</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;