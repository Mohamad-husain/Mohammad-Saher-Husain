import { useState, useEffect } from 'react';
import axios from 'axios';
import CardHover from './Cardfood';
import MideCard from './Restaurant_photo';

const useDataRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [photoRestaurant, setphotoRestaurant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getRestaurant');
        const lastFiveData = res.data.slice(8,13);
        const specificData = res.data[13];
        setRestaurantData(lastFiveData);
        setphotoRestaurant(specificData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return { restaurantData, photoRestaurant };
};

function MultipleCards() {
  const { restaurantData, photoRestaurant } = useDataRestaurant();

  return (
    <>
      {photoRestaurant && (
        <div>
          <h1 className="Head_card_res">Kan ya ma kan</h1>
          <div className="card_rees">
          <MideCard
            imageURl={photoRestaurant.imageUrl}
            title={photoRestaurant.title}
            subtitle={photoRestaurant.subtitle}
          />
        </div>
        </div>

      )}

      <div className="card_rees">
        {restaurantData.map((restaurant, index) => (
          <div className="best_res" key={index}>
            <CardHover
              imageUrl={restaurant.imageUrl}
              title={restaurant.title}
              subtitle={restaurant.subtitle}
            />

          </div>
        ))}
      </div>
    </>
  );
}

export default MultipleCards;