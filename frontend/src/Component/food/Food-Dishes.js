import React, { useEffect, useState } from 'react';
import './Food-Dishes.css';
import Navbar from '../Navbar/Navbar.js';

const Click = (locationUrl) => {
    window.open(locationUrl, '_blank');
};

function Stars({ rate }) {
    if (rate === undefined) {
        return <div>unavailable</div>;
    }
    const stars = [];
    for (let i = 0; i < rate; i++) {
        stars.push(<i className="bi bi-star-fill" key={i}></i>);
    }
    return <div>{stars}</div>;
}



function FoodDishes() {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getFood')
            .then(response => response.json())
            .then(data => {
                setFoodData(data);
            })
            .catch(error => console.error('error fetching data:', error));
    }, []);

    
    return (
        <div>
            <Navbar />
            <div className="container-food">
                <main className="main-content-food">
                    {foodData.map((foodItem) => (
                        <section className="section-resturant" key={foodItem._id}>
                            <div className="resturant-image-container">
                                <img src={foodItem.imageRes} alt={foodItem.NameRes} className="resturant-image" />
                                <div className="resturant-name-location-Evaluation">
                                    <div className="resturant-info">
                                        <div className="resturant-card">
                                            <h2 className='header2-food'>{foodItem.NameRes}</h2>
                                        </div>
                                        <div className="resturant-card">
                                            <h2 className='header2-food'>
                                                Evaluation: <Stars rate={foodItem.Rate} />
                                            </h2>
                                        </div>
                                        <div className="resturant-card">
                                            <h2 className='header2-food'>Location</h2>
                                            <button onClick={() => Click(foodItem.location)} className="location-button">View Location</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="food-section">
                                {foodItem.imageUrl.map((image, index) => (
                                    <div className="food-resturant-item" key={index}>
                                        <img src={image} alt={foodItem.title[index]} className="image-food-name" />
                                        <h3 className="header3-food">{foodItem.title[index]}</h3>
                                        <p className="paragraph-food">{foodItem.subtitle[index]}</p>
                                    </div>
                                ))}
                            </section>
                        </section>
                    ))}
                </main>
            </div>
        </div>
    );
}

export default FoodDishes;