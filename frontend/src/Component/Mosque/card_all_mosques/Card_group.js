import React from 'react';
import CardRes from './Card_mosques.js';
import './Card_group.css';
import useDataMosques from '../dataBack/dataMosq.js'; 


function DataCardMosq() {
  const mosquesData = useDataMosques().slice(0,8);

  return (
    <>
      <div className="Name_of_citiy">
        <h1>The most famous Mosque</h1>
      </div>

      <div className="card_rees">
        {mosquesData.map((Mosques) => (
          <CardRes 
            key={Mosques._id}
            imageUrl={Mosques.imageUrl}
            title={Mosques.title}
            subtitle={Mosques.subtitle}
          />
        ))}
      </div>
    </>
  );
}

export default DataCardMosq;