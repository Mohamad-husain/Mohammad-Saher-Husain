import React, { useState, useEffect } from 'react';
import './Navbar.css';
import image_logo from "./logo.webp";
import image_profile from "./Profile.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




function Navbar() {
    const navigate = useNavigate();
    const handleshowprofile = () => {
        navigate("/ProfileComponents");
    };
    const [uploadProfile, setUploadProfile] = useState("");

    async function find() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:5000/getUserData/${token}`);
            setUploadProfile(response.data.user.uploadProfile);
        
        } catch (error) {
           
        }
    }
    find();

    const handleLogin = ()=>{
        navigate("/login")
    }


    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {

            setUploadProfile(savedProfile.uploadProfile);

        }
    }, []);

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    };


    return (
        <nav className="SecondNavbar">
            <div className="LogoSecondNavbar">
                <img className="logoImage-Navbar" src={image_logo} alt="Logo" />
            </div>
            <div className="LinksRouter">
                <Link className='SecondNavbar-link' to='/'>Home Page</Link>
                <Link className='SecondNavbar-link' to='/places'>Places</Link>
                <Link className='SecondNavbar-link' to='/Guidesearch'>Guide</Link>
                <Link className='SecondNavbar-link' to='/KnowTheUnknown'>Know The Unknown</Link>
            </div>
            <div>
                {!isLoggedIn ? (          
                        <button className="profileSecondNavbar" onClick={handleLogin}>
                                <img className="profileImage-Navbar" src={image_profile} alt="Profile" onClick={handleLogin} />
                        </button>

                ) : (

                    <button className="profileSecondNavbar" onClick={handleshowprofile}>
                        {uploadProfile && isValidUrl(uploadProfile) ? (
                            <img src={uploadProfile} alt="Profile" className="profileImage-Navbar" onClick={handleshowprofile} />
                        ) : (
                            <img className="profileImage-Navbar" src={image_profile} alt="Profile" onClick={handleshowprofile} />
                        )}
                     </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;