import React from 'react';
import './Restaurant_photo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MideCard({ imageURl, title, subtitle }) {
  return (
    <>
      <div className="center">
        <div className="article-card " id="midCard_s">
          <div className="content">
          
            <p className="title">{title}</p>
            <p className="description">{subtitle}</p>
          </div>
          <img src={imageURl} alt="restaurant-img" />
        </div>
      </div>
    </>
  );
}

export default MideCard;