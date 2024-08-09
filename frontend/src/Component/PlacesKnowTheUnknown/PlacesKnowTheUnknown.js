import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './PlacesKnowTheUnknown.css';

function PlacesKnowTheUnknown() {
    const location = useLocation();
    const { imageUrl, title, subtitle } = location.state;

    return (
        <div>
            <Navbar />
            <div className="MainContainerPlace">
                <div className="containerPlaceKnowTheUnknown">
                    <img className="largeImagePlaceKnowTheUnknown" src={imageUrl} alt={title} />
                    <h1 className="PlaceKnowTheUnknownHeader1">{title}</h1>
                    <h2 className="PlaceKnowTheUnknownSubtitle">{subtitle}</h2>
                </div>
            </div>
        </div>
    );
}

export default PlacesKnowTheUnknown;