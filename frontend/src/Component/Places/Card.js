import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios'


const MainPage = () => {
  
    const [Places , setPlaces] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/getPlaces')
      .then(Places => setPlaces(Places.data))
      .catch(err => console.log(err));
    }, []);


  return (
    <>
      <Container>
        <Row xs={1} md={3} lg={4} className="g-4 justify-content-center">
          {Places.map((place) => (
            <Col key={place.id} place={place} className="d-flex justify-content-center">
              <div className="card_places" id="card__all_places">

                <img className="card__background_places" src={place.imageUrl} alt="Jerusalem" />

                  <div className="card__content_places">

                    <div className="card__content--container_places">

                      <h2 className="card__title_places">{place.abbreviation}</h2>

                      <p className="mb-2 text-muted_places" id="p_card">{place.Name_Places}</p>
                      
                      <p id="p_card_places">{place.description_Places}</p>

                      <button className="card__button_places">Book Tour</button>

                    </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;