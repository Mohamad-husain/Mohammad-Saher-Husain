import React from 'react';
import './Card_mosques.css';

function CardRes({ imageUrl, title, subtitle }) {
  return (
    <>
      <div className="card_res_menu">
        <img src={imageUrl} alt={title} />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{subtitle}</p>
          <button className="card__button">Click Me</button>
        </div>
      </div>
    </>
  );
}

export default CardRes;