import React from 'react';
import './Cardfood.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardHover({ imageUrl, title, subtitle }) {
    return (

        <div className="card-hover">
            <div className="card-hover__content">
                <h3 className="card-hover__title">{title}</h3>
                <p className="card-hover__text">{subtitle}</p>
                <a href="#/" className="card-hover__link" alt=" ">
                    <span>Learn How</span>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </a>
            </div>
            <div className="card-hover__extra">
                <h4>
                    Learn <span>now</span> and get <span>40%</span> discount!
                </h4>
            </div>
            <img id="img_cardfood" src={imageUrl} alt=" " />
        </div>
    );
}

export default CardHover;