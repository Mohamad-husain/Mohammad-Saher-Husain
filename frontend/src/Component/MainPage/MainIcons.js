import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainIcons.css';
import unknown from './nonUnknown1.png';
import visit from './place to visit2.png';
import guide from './guide2.png';
import { Link } from 'react-router-dom';

function MainIcons() {
  return (
    <div className='icons-container shadow'>
      <Link to='/KnowTheUnknown' className="icon-link">
        <img src={unknown} alt="Non-unknown" className="icon-image" />
        <div className="text-under-icon">Known The Unknown</div>
      </Link>
      <Link to="/Places" className="icon-link">
        <img src={visit} alt="Place to Visit" className="icon-image" />
        <div className="text-under-icon">Places</div>
      </Link>
      <Link to="/Guidesearch" className="icon-link">
        <img src={guide} alt="Guide" className="icon-image" />
        <div className="text-under-icon">Guide</div>
      </Link>
    </div>
  );
}

export default MainIcons;