import React from 'react';

import Information from '../Information/index';
import Icon from '../Icon/index';

import "./Room-homepage.scss";

const RoomsListPage = (props) => {
  const { data } = props;

  const roomCards = data.map((room, idx) => (
    <div
      key={idx}
    >
      <div>
        <img src={room.imageUrl} alt="room img" />
      </div>
      <h3>{room.name}</h3>
    </div>
  ));
  return (
    <div className="hotelReservation__listpage">
      <div className="hotelReservation__listpage--background">

      </div>
      <div className="hotelReservation__listpage--roomslist">
        {roomCards}
      </div>
    </div>
  );
};

export default RoomsListPage;