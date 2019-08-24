import React, { useState, useEffect } from 'react';

import { token, urls } from '../../api/apiUrl';
import HomePage from './Rooms-homepage';

const RoomsContainer = () => {
  const [roomsData, setRoomsData] = useState();
  const [index, setIndex] = useState(0);
  //get all rooms info when first render
  useEffect(() => {
    fetch(urls.allRooms, {
      method: 'GET',
      headers: {
        Authorization: token,
        accept: 'application/json'
      }
    }).then(res => res.json())
      .catch(err => console.log(err))
      .then(data => setRoomsData(data.items));
  }, []);

  function handleMouseOver(i) {
    setIndex(i);
  }

  return (
    (roomsData) ?
      <HomePage data={roomsData} handleMouseOver={handleMouseOver} index={index} />
      : ''
  );
};

export default RoomsContainer;