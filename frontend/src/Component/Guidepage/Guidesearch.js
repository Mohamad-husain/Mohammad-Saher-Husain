import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Guidesearchbackground from "./touguide.png";
import "./Guidesearch.css";
import Navbar from '../Navbar/Navbar'

function Guidesearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [guideData, setGuideData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    async function fetchGuides() {
      try {
        const response = await axios.get("http://localhost:5000/api/guides");
        setGuideData(response.data);
        setFilteredCards(response.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      }
    }

    fetchGuides();
  }, []);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const filtered = guideData.filter((guide) =>
      guide.name.toLowerCase().includes(trimmedSearchTerm)
    );
    setFilteredCards(filtered);
  };

  const handleshowprofile = (guideId) => {
    navigate(`/GuideProfile/${guideId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="Guidepagecontainer">
        <div className="guidesearch">
          <div className="img-fluid containerguideimg">
            <img src={Guidesearchbackground} alt="Background" />
          </div>
          <form
            className="tourguidesearchbar col-12"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              className="tourguidesearchinput"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="tourguidesearchbutton">
              <svg
                className="svg-Guide"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>
          </form>
          {filteredCards.length > 0 ? (
            <div className="tourguidebox">
              {filteredCards.map((guide, index) => (
                <div className="tourguidecard" key={index}>
                  <div className="imgBx">
                    <img src={guide.imgurl} alt="CardImg" />
                  </div>
                  <div className="tourguidedetails">
                    <h2>
                      {guide.name}
                      <br />
                      <span>{guide.bio}</span>
                      <button
                        type="button"
                        onClick={() => handleshowprofile(guide._id)}
                      >
                        Show Profile
                      </button>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No guides found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Guidesearch;