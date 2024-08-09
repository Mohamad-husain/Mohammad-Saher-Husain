import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './P_Button_places.css';
import { useNavigate } from 'react-router-dom';


const GoToPages = () => {
    
    const navigate = useNavigate();

    const handleshowRestaurant = () => {
        navigate("/Restaurant");
    };

    const handleshowMosques = () => {
      navigate("/Mosques");
  };

  return (
    <Container className="button-container_Places">
      <Row className="row_Places">

        <Col xs={12} md={4} lg={2}> <button className="btn btn-warning w-100" onClick={handleshowRestaurant}> Restaurant </button> </Col>
        <Col xs={12} md={4} lg={2}> <button type="button" className="btn btn-warning w-100" onClick={handleshowMosques}>Mosques</button></Col>
        <Col xs={12} md={4} lg={2}> <button type="button" className="btn btn-warning w-100">Hotels      </button></Col>
        <Col xs={12} md={4} lg={2}> <button type="button" className="btn btn-warning w-100">Playgrounds </button></Col>
        <Col xs={12} md={4} lg={2}> <button type="button" className="btn btn-warning w-100">Parks       </button></Col>
        <Col xs={12} md={4} lg={2}> <button type="button" className="btn btn-warning w-100">Cafes       </button></Col>
      </Row>
    </Container>
  );
};

export default GoToPages;