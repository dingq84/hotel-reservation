import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { token, urls } from '../../api/apiUrl';
import HomePage from './homepage/Rooms-homepage';
import ListPage from './listpage/Rooms-listpage';
import SingleRoom from '../Room/index';

const RoomsContainer = () => {
  const [roomsData, setRoomsData] = useState();
  const [index, setIndex] = useState(0);
  //get all rooms info when first render
  useEffect(() => {
    function getRoomsData() {
      fetch(urls.allRooms, {
        method: 'GET',
        headers: {
          Authorization: token,
          accept: 'application/json'
        }
      }).then(res => res.json())
        .catch(err => console.log(err))
        .then(data => setRoomsData(data.items));
    }

    getRoomsData();

    return () => {
      getRoomsData();
    }
  }, []);

  function handleMouseOver(i) {
    setIndex(i);
  }

  return (
    <Router basename="/hotel-reservation/">
      {
        (roomsData) ?
          <>
            <Route
              exact
              path='/'
              render={() => <HomePage
                data={roomsData}
                handleMouseOver={handleMouseOver}
                index={index} />
              }
            />
            <Route
              path='/roomslist'
              render={
                () => <ListPage data={roomsData} />
              }
            />
            {
              roomsData.map((room, idx) => (
                <Route
                  key={idx}
                  path={`/room/${room.id}`}
                  render={() => <SingleRoom id={room.id} />}
                />
              ))
            }
          </> : <div>loading</div>
      }
    </Router>
  );
};

export default RoomsContainer;