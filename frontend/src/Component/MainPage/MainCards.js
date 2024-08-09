import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainCards.css';
import { SearchContext } from './SearchContext';

function MainCards() {
  const { searchResults} = useContext(SearchContext);

  const renderCards = () => {
    if (searchResults.length === 0) {
      return (
        <>
          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src='https://buffer-media-uploads.s3.amazonaws.com/663e460bb658562fc402a8fd/663f91758d4ad2c0ce0f0950/f688e6a5dc749abb8a8c1474317f3bc2.original.jpg' alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue"><a href="#/" alt=" ">bab alsaha</a></h1>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Al-Saha Commercial Square is located in the middle of the Kasbah neighborhood in the Old City of Nablus. It was given this name due to the presence of a main point with gates operating on the neighborhoods of Al-Qaryon, Aqaba, and Al-Habla. In the middle of the square of the old square from the Old Testament is a monument in front of the Victory Mosque. The Turkish Government Palace is located on the southern side of the square.</div>
            </div>
          </article>
          <article className="postcard dark red">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src='https://buffer-media-uploads.s3.amazonaws.com/663e460bb658562fc402a8fd/663f9253311ab547ae0c3da2/a7fcdb67996b65a67464b35e762872a5.original.jpg' alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red"><a href="#/" alt=" ">Church of the Nativity</a></h1>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">The Church of the Nativity is the church where Jesus Christ was born. It is located in Bethlehem, in the south of the West Bank, four kilometers from the Bethlehem Conference Palace. Built by Emperor Constantine in 335.</div>
            </div>
          </article>
          <article className="postcard dark green">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src='https://buffer-media-uploads.s3.amazonaws.com/663e460bb658562fc402a8fd/663f92e68d4ad2c0ce0f097a/5e766fc1b7b7009d979e7ad5945d49b9.original.jpg' alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green"><a href="#/" alt=" ">Hisham's Palace</a></h1>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">Hisham's Palace The palace built by the Umayyad Caliph Hisham ibn Abd al-Malik in the year 724-743 AD and Al-Walid ibn Yazid in 743-744 AD was the headquarters of the state. It is known that the Islamic Umayyad dynasty ruled an empire extending from India to France, and as is the case with most Muslim caliphs, it preferred Caliph Hisham bin Abdul Malik imposed desert freedom on city life in the capital, Damascus. The palace is a group of buildings, bathtubs, mosques and halls</div>
            </div>
          </article>
          <article className="postcard dark yellow">
            <a className="postcard__img_link" href="#/" alt=" ">
              <img className="postcard__img" src='https://buffer-media-uploads.s3.amazonaws.com/663e460bb658562fc402a8fd/663f929e67dc72a16d0a54aa/e2eae8c42db6f928f993ea10e0fad02b.original.jpg' alt=" " />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title yellow"><a href="#/" alt=" ">The Palestinian Museum</a></h1>
              <div className="postcard__bar" />
              <div className="postcard__preview-txt">The Palestinian Museum is an independent cultural institution dedicated to promoting an open and dynamic Palestinian culture at the local and international levels. The Museum presents and contributes to the production of narratives about the history of Palestine, its culture, and its society from a new perspective. It also provides an incubating environment for creative projects, educational programs, and innovative research. It is one of the most important contemporary cultural projects in Palestine.</div>
            </div>
          </article>
        </>
      );
    }

    else {
      // Render a maximum of 4 cards with search results
      return searchResults.slice(0, 4).map((result) => (
        <article key={result.id} className="postcard dark blue">
          <a className="postcard__img_link" href="#/" alt=" ">
            <img className="postcard__img" src={result.imageUrl} alt=" " />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue">{result.Name_Places}</h1>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">{result.description_Places}</div>
          </div>
        </article>
      ));
    }
  };

  return (
    <div className='bgc'>
      <h1 className='cards-header'>Info About General Places:</h1>
      <section>
        <div className="container py-4">
          {renderCards()}
        </div>
      </section>
    </div>
  );
}

export default MainCards;