
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "./gideprofile.css";
import Navbar from '../Navbar/Navbar'


const Profile = () => {
  const [guideInfo, setGuideInfo] = useState(null);
  const { guideId } = useParams();
  useEffect(() => {
    async function fetchGuideInfo() {
      const response = await axios.get(`http://localhost:5000/api/guides/${guideId}`);
      setGuideInfo(response.data);
    }

    fetchGuideInfo();
  });

  const generateStarRating = (rating) => {
    const stars = "⭐️".repeat(rating);
    return stars;
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        {guideInfo && (
          <>
            <Header guide={guideInfo} generateStarRating={generateStarRating} />
            <AboutMe guide={guideInfo.perinfo} />
            <Languages guide={guideInfo.language} generateStarRating={generateStarRating} />
            <SocialMediaLinks guide={guideInfo} />
          </>
        )}
      </div>
    </div>

  );
};

const Header = ({ guide, generateStarRating }) => {
  // Pass generateStarRating as a prop
  return (
    <div className="header">

      <img src={guide.imgurl} alt="" className="profile-photo" />
      <h1 className="guide-name">{guide.name}</h1>
      <div className="guide-rating">
        {generateStarRating(guide.rating)}
      </div>{" "}

      <p className="guide-title">{guide.bio}</p>
    </div>
  );
};

const AboutMe = ({ guide }) => (
  <div className="about-container">

    <div className="about-bio">
      <h2>About Me</h2>
      <p>{guide.about}</p>
    </div>
    <div className="personal-info">
      <h2>Personal Information</h2>
      <ul>
        <li>
          <strong>City of Birth :</strong> {guide.birth}
        </li>
        <li>
          <strong>City of Work :</strong> {guide.work}
        </li>
        <li>
          <strong>Age :</strong> {guide.age}
        </li>
        <li>
          <strong>Email :</strong> {guide.Email}
        </li>
      </ul>
    </div>
  </div>
);


const Languages = ({ guide, generateStarRating }) => (
  <div className="language-container">
    {Object.entries(guide).map(([key, value]) => (
      <div key={key} className="language-box">
        <h4>{key}</h4>
        {generateStarRating(value)}
      </div>
    ))}
  </div>
);

const SocialMediaLinks = ({ guide }) => {
  const { facebook, instagram, twitter, whatsapp } = guide;

  return (
    <div className="social-media-links">
      {facebook && (
        <a
          href={facebook}
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      )}
      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      )}
      {twitter && (
        <a
          href={twitter}
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      )}
    </div>
  );
};

export default Profile;
