import React, { useState, useEffect } from 'react';

import { token, urls } from '../../api/apiUrl';
import RoomView from './Room-view';

const RoomContainer = ({ id = '' }) => {
  const [data, setData] = useState();
  useEffect(() => {
    function getRoomData() {
      fetch(`${urls.room}${id}`, {
        method: 'GET',
        headers: {
          Authorization: token,
          accept: 'application/json'
        }
      }).then(res => res.json())
        .catch(err => console.log(err))
        .then(data => setData(data));
    }

    getRoomData();

    return () => {
      getRoomData();
    }
  }, [id]);
  console.log(data)
  return (
    (data) ?
      <RoomView data={data} /> : ''
  );
};

export default RoomContainer;