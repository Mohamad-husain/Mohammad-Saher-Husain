import './KnowTheUnknown.css';
import { useNavigate } from "react-router-dom";
import BackGround_image from './Jericho-Palestine.jpg';
import Navbar from "../Navbar/Navbar"
import { useState, useEffect } from "react";
import axios from 'axios';

function KnownTheUnknown() {
    const [unknownData, setUnknownData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:5000/getUnknown");
                setUnknownData(result.data);
            } catch (error) {
                console.error("Can't fetch the data:", error);
            }
        };
    
        fetchData();
    }, []);

    const handleCardClick = (unknownPlace) => {
        navigate("/PlacesKnowTheUnknown", { state: unknownPlace });
    };
    
    return (
        <div>
            <Navbar />
            <div className="MainContainerKnow">
                <div className="containerKnowTheUnKnown">
                    <h1 className="KnowTheUnKnownHeader1">Known The Unknown</h1>
                    <img className="largeImageKnowTheUnKnown" src={BackGround_image} alt="" />
                    <section className="CarouselKnowTheUnKnown">
                        <h2 className="categories__title">Our Secret Places</h2>
                        <div className="carouselContainerKnowTheUnKnown">
                            {unknownData.map((unknownPlace, index) => (
                                <div className="carousel-item" key={index}>
                                    <img className="carousel-item__img" src={unknownPlace.imageUrl} alt="places" />
                                    <button onClick={() => handleCardClick(unknownPlace)}>
                                        <div className="carousel-item__details">
                                            <div className="controls">
                                                <span className="fas fa-play-circle"></span>
                                                <span className="fas fa-plus-circle"></span>
                                            </div>
                                            <span className="carousel-item__details--title">{unknownPlace.title}</span>
                                            <h6 className="carousel-item__details--subtitle">Read More</h6>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default KnownTheUnknown;