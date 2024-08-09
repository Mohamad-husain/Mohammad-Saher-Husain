import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataMosques = () => {
  const [mosquesData, setmosquesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getMosques');
        setmosquesData(res.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return mosquesData;
};

export default useDataMosques;