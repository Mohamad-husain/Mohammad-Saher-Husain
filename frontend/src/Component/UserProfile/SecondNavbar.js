import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SecondNavdar.css';
import ProfileCard1 from './ProfileCard1';
import ProfileCard2 from './ProfileCard2';
import AccountInfo from './AccountInfo'; 
import ProfileCard3 from './ProfileCard3'; 

const cardData = {
    1: { title: "View", description: "Explore our product offerings." },
    2: { title: "Account Info", description: "Learn more about our services." },
    3: { title: "Trip", description: "Get support for our products and services." },
    4: { title: "Photo", description: "Join our community and engage with us." }
};

const SecondNavbar = () => {
    const [activeMenu, setActiveMenu] = useState('1'); // Set initial state to '1' for View
    const [showAccountInfo, setShowAccountInfo] = useState(false); 
    const [showProfileCard3, setShowProfileCard3] = useState(false); 

    const handleMenuClick = menuId => {
        setActiveMenu(menuId);
        if (menuId === '2') {
            setShowAccountInfo(true);
            setShowProfileCard3(false);
        } else if (menuId === '4') {
            setShowAccountInfo(false);
            setShowProfileCard3(true);
        } else {
            setShowAccountInfo(false);
            setShowProfileCard3(false);
        }
    };

    return (
        <div>
            <nav id="menu">
                {Object.entries(cardData).map(([key, { title }]) => (
                    <div key={key} className={`menu-item ${activeMenu === key ? 'active' : ''}`} onClick={() => handleMenuClick(key)}>
                        <div className="menu-text">
                            <a href="# ">{title}</a>
                        </div>
                    </div>
                ))}
            </nav>
            {showAccountInfo && <AccountInfo />} 
            {showProfileCard3 && <ProfileCard3 />} 
            {activeMenu === '1' && (
                <div className="row">
                    <div className="col">
                        <ProfileCard1/>
                    </div>
                    <div className="col">
                        <ProfileCard2/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SecondNavbar;
