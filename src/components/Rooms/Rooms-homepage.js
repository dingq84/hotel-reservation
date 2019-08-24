import React from 'react';

import Information from '../Information/index';
import Icon from '../Icon/index';

import "./Room-homepage.scss";

const HomePage = (props) => {
  const { data, handleMouseOver, index } = props;
  const roomsList = (
    <ul
      className='hotelReservation__homepage--roomslide'
    >
      {
        data.map((room, idx) => (
          <li
            key={idx}
            data-content={idx}
            onMouseOver={(e) => handleMouseOver(parseInt(e.target.dataset.content))}
          >
            {room.name}
          </li>
        ))
      }
    </ul>
  );
  return (
    <div
      className='hotelReservation__homepage'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
        url(${data[index].imageUrl})`
      }}
    >
      <div className="hotelReservation__homepage--icon">
        <Icon />
      </div>
      <h1
        className='hotelReservation__homepage--number'
      >
        {`0${index + 1}`}
      </h1>
      <h1
        className='hotelReservation__homepage--roomname'
      >
        {data[index].name}
      </h1>
      {roomsList}
      <div
        className="hotelReservation__homepage--contactinfo"
      >
        <Information />
      </div>
    </div>
  );
};

export default HomePage;