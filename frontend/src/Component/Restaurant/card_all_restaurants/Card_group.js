import React from 'react';
import CardRes from './Card_restaurants.js';
import './Card_group.css';
import useDataRestaurant from '../dataBack/dataRes.js'; 


function DataCard() {
  const restaurantData = useDataRestaurant().slice(0,8);

  return (
    <>
      <div className="Name_of_citiy">
        <h1>Restaurants</h1>
      </div>

      <div className="card_rees">
        {restaurantData.map((restaurant) => (
          <CardRes 
            key={restaurant._id}
            imageUrl={restaurant.imageUrl}
            title={restaurant.title}
            subtitle={restaurant.subtitle}
          />
        ))}
      </div>
    </>
  );
}

export default DataCard;