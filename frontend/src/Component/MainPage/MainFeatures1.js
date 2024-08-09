import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainFeatures1.css";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { PiPathFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

function MainFeatures1() {
  const navigate = useNavigate();
  
  const handleClick = (feature) => {
    navigate (`/OurTeam`);
  };

  return (
    <div>
      <h1 className="feature-header">Features:</h1>
      <div className="feature-content">
        <button className="feature-card" onClick={() => handleClick('Team')}>
          <div className="feature-icon">
            <RiTeamLine size={36} />
          </div>
          <p className="feature-title">Team</p>
          <p className="feature-text">About Team.</p>
        </button>
        <div className="feature-card">
          <div className="feature-icon">
            <MdOutlineLocalOffer size={36} />
          </div>
          <p className="feature-title">Offers</p>
          <p className="feature-text">About Offers.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <AiOutlineLike size={36} />
          </div>
          <p className="feature-title">Most like place to visit</p>
          <p className="feature-text">About most like places to visit.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <GiPayMoney size={36} />
          </div>
          <p className="feature-title">Booking</p>
          <p className="feature-text">About Booking.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <PiPathFill size={36} />
          </div>
          <p className="feature-title">Paths</p>
          <p className="feature-text">About pahts.</p>
        </div>
      </div>
    </div>
  );
}

export default MainFeatures1;
