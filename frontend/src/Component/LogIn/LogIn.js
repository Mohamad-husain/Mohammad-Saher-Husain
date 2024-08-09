import React, { useState } from 'react';
import './LogIn.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await axios.post('http://localhost:5000/login', values);

                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);

                    
                    setMessage('Login successful');
                    navigate('/');
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        setMessage('Invalid email or password');
                    } else {
                        setMessage('An error occurred during login');
                    }
                } else {
                    setMessage('An error occurred during login');
                }
                console.error('Error during login:', error);
            }
            setSubmitting(false);
        },
    });



    return (
        <div className='CenteredContainer'>
            <div className="ContainerLogIn">
                <h1 className='LogInHeaderOne'>LOGIN</h1>
                <h3 className='HeaderThreeLogIn'>Welcome Back To Secrets Of Cities</h3>
                <form className='FormLogIn' onSubmit={formik.handleSubmit}>
                    <div>
                        <label className='LabelLogIn' htmlFor="emaik">Email</label>
                        <input
                            type="text"
                            className="InputUsernameLogIn"
                            name="email"
                            placeholder="Email"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error-message">{formik.errors.email}</div>
                        ) : null}

                    </div>
                    <div className="passwordContainerLogIn">
                        <label className='LabelLogIn' htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="InputPasswordLogIn"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error-message">{formik.errors.password}</div>
                        ) : null}
                        
                        <svg
                            id="togglePassword"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className={`bi bi-eye-fill passwordIconLogIn ${showPassword ? 'visible' : ''}`}
                            viewBox="0 0 16 16"
                            onClick={togglePassword}
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </div>
                    {message && <div className="message">{message}</div>}
                    <input className='InputSubmitLogIn' type="submit" value="Log In" />
                    <div className="LogInLinks">
                        <Link to='/CreateAcount'>Create Account</Link>
                        <span className='span-space'> | </span>
                        <Link to='/ForgetPassword'>Forgot Password</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LogIn;