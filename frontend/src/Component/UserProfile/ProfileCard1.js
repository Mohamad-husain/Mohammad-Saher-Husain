import React, { useState, useEffect } from 'react';
import '../UserProfile/ProfileCard1.css'
import { FaLocationDot } from "react-icons/fa6";
import { SiBiolink } from "react-icons/si";
import axios from 'axios';

const ProfileCard1 = () => {
    const [bio, setBio] = useState("");
    const [country, setCountry] = useState("");

    async function find() {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:5000/getUserData/${token}`);
            setBio(response.data.user.bio);
            setCountry(response.data.user.country);

        
        } catch (error) {
            // setErrorMessage('An error occurred while searching');
        }
    }
    find();

    

    useEffect(() => {
        const savedProfile = JSON.parse(localStorage.getItem('profileData'));
        if (savedProfile) {

            setBio(savedProfile.bio);
            setCountry(savedProfile.country);
            
        }
    }, []);

    return (
        <div>
            <div className="card3Account1">
                <main className="mainCard1Ameer">
                    <section className="text1Ameer">
                        <h2>Intro</h2>
                    </section>      
                    <section className="locAmeer">
                        <FaLocationDot /> {country}
                    </section>
                    <section className="bioAmeer">
                        <SiBiolink /> {bio ||"bio"}
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProfileCard1