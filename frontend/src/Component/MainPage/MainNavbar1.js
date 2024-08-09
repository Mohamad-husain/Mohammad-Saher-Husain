import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css';
import Alaqsa from './Alaqsa.png';
import logo from './logo.png';
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from './SearchContext';

function MainNavbar1() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [abbName, setabbName] = useState('');
    const { setSearchResults } = useContext(SearchContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [uploadProfile, setUploadProfile] = useState("");

    async function find() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:5000/getUserData/${token}`);
            setUploadProfile(response.data.user.uploadProfile);
        } catch (error) {
            // handle error
        }
    }
    find();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {
            setUploadProfile(savedProfile.uploadProfile);
        }
    }, []);

    const handleshowprofile = () => {
        navigate("/ProfileComponents");
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            findAbb();
        }
    };

    async function findAbb() {
        if (!abbName.trim()) {
            setSearchResults([]);
            setErrorMessage('Please enter a name of a city');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/search/${abbName}`);
            if (response.data.length === 0) {
                setErrorMessage('City not found');
                setSearchResults([]);
            } else {
                setErrorMessage('');
                setSearchResults(response.data);
            }
        } catch (error) {
            setErrorMessage('An error occurred while searching');
        }
    }

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    return (
        <div className='main-navbar'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Alaqsa})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: "500px",
            }}>
            <div className=''>
                <div className='navbar'>
                    <Navbar bg="light" expand="lg" className="shadow">
                        <Container>
                            <Navbar.Brand href="#home">
                                <div className="logo">
                                    <Navbar.Brand href="#home">
                                        <img src={logo} alt="Logo" className='rounded-circle' />
                                    </Navbar.Brand>
                                </div>
                            </Navbar.Brand>
                            <div className='HP-navbar'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        {!isLoggedIn ? (
                                            <>
                                                <Link to="/LogIn"><div className='sign-in'>Sign in</div></Link>
                                                <Link to="/CreateAcount">
                                                    <Button className="sign_up" variant="outline-primary">Sign up</Button>
                                                </Link>
                                            </>
                                        ) : (
                                            <Nav.Item className="profile-nav-item">
                                                <button className="profile-button" onClick={handleshowprofile}>
                                                    {uploadProfile && isValidUrl(uploadProfile) ? (
                                                        <img src={uploadProfile} alt="Profile" className="profile-logo" />
                                                    ) : (
                                                        <BsPersonCircle className='profile-logo' style={{ color: 'white' }} />
                                                    )}
                                                </button>
                                            </Nav.Item>
                                        )}
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className='mainpage-header1'>
                <h2>Secrets of Cities-Palestine</h2>
            </div>

            <div className='main-page-search mt-20'>
                <div className="search-container">
                    <input 
                        onChange={(e) => { 
                            setabbName(e.target.value);
                            if (errorMessage) {
                                setErrorMessage('');
                            }
                        }} 
                        onKeyPress={handleKeyPress} 
                        type="text" 
                        name="search" 
                        placeholder="Search for name of a city..." 
                        className="search-input" 
                    />
                    <button onClick={findAbb} className="search-btn">
                        <i className="fas fa-search" />
                    </button>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    );
}

export default MainNavbar1;
