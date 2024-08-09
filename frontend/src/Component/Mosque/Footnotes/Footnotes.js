import React from 'react';
import './Footnotes.css';
import useDataMosques from '../dataBack/dataMosq';

function CardFootnotes({ children }) {
  return (
    <div className="card_footnotes">
      {children}
    </div>
  );
}

function Cardimg({ src, alt }) {
  return (
    <div className="card__image">
      <img src={src} alt={alt} />
    </div>
  );
}

function FootnotesMosq() {
  const mosquesData = useDataMosques();
  const images = mosquesData[8]?.image||[];

  return (
    <div className="main-container">
      <div className="grid-container">
        {images.map((image, index) => (
          <Cardimg key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
        <CardFootnotes>
          <p><em>We wander for distraction, but we travel for fulfilment.</em></p>
          <p>— Hilaire Belloc</p>
        </CardFootnotes>
      </div>
    </div>
  );
}

export default FootnotesMosq;