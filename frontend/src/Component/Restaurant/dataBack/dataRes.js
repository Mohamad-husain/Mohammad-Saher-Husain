import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataRestaurant = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/getRestaurant');
                setRestaurantData(res.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return restaurantData;
};

export default useDataRestaurant;