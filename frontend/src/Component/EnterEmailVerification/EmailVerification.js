import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EmailVerification.css';
const EmailVerification = () => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/verifyCode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            if (response.ok) {
                console.log('Code verified:', result);
                navigate('/reset-password/:token');
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleCancel = () => {
        navigate('/ForgotPassword');
        console.log('Cancel button clicked');
    };
    return (
        <div className='CenteredContainer'>
            <div className="container-verification">
                <h1 className='header-verification'>Enter the code</h1>
                <hr />
                <p className='paragraph-verification'>Please enter the code that you received in your email.</p>
                <form onSubmit={handleSubmit}>
                    <label className='label-verification' htmlFor="code"></label>
                    <input
                        type="text"
                        className="input-verification"
                        name="code"
                        placeholder="The Code"
                        required
                        value={code}
                        pattern="\d{6}"
                        maxLength="6"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    
                    <button className='button-verify' type="submit">Verify</button>
                    <button className='button-cancel' type="button" onClick={handleCancel}>Cancel</button>
                </form>
                <Link to='/ForgotPassword' />
            </div>
        </div>
    );
};

export default EmailVerification;