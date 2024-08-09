import React from "react";
import "./Card_restaurants.css";
import { Link } from "react-router-dom";

function CardRes({ imageUrl, title, subtitle }) {
  return (
    <>
      <div className="card_res_menu">
        <img src={imageUrl} alt={title} />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{subtitle}</p>
          <Link to="/FoodDishes">
            <button className="card__button">Click Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardRes;
