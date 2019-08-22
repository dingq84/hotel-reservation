import React, { useState, useEffect, useMemo } from 'react';

import { token, urls } from '../../api/apiUrl';
import RoomsView from './Rooms-view';

const RoomsContainer = () => {
  const [roomsData, setRoomsData] = useState();
  const a = useMemo(() => RoomsView({ data: roomsData }), [roomsData]);
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

  return (
    <div>123</div>
  );
};

export default RoomsContainer;