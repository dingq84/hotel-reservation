import React, { useState, useEffect, useRef, createRef } from 'react';
import { Link } from 'react-router-dom';

import Information from '../../Information/index';
import Icon from '../../Icon/index';

import "./Room-listpage.scss";

const ListPage = (props) => {
  const [index, setIndex] = useState(0);
  const { data } = props;
  const cardsTextRef = useRef(data.map(() => createRef()));
  const allImg = data.map(room => room.imageUrl);

  useEffect(() => {
    let int;
    int = setTimeout(() => {
      if (index === allImg.length + 1)
        setIndex(0)
      else
        setIndex(index + 1)
    }, 3000);

    return () => {
      clearTimeout(int);
    }
  }, [index]);

  function showContent(idx) {
    cardsTextRef.current[idx].current.style.top = '-70px';
  }

  function hideContent(idx) {
    cardsTextRef.current[idx].current.style.top = '0';
  }

  const roomCards = data.map((room, idx) => (
    <div
      key={idx}
      className="hotelReservation__listpage--roomslist--cardwraper--cards"
      onMouseEnter={() => showContent(idx)}
      onMouseLeave={() => hideContent(idx)}
    >
      <Link to={`/room/${room.id}`}>
        <div
          className="hotelReservation__listpage--roomslist--cardwraper--cards--img"
          style={{
            backgroundImage: `url(${room.imageUrl})`
          }}
        >
        </div>
        <div
          className="hotelReservation__listpage--roomslist--cardwraper--cards--text"
          ref={cardsTextRef.current[idx]}
        >
          <h3>{room.name}</h3>
          <div>
            <span>{`NT. ${room.normalDayPrice}平日`}</span>
            <span>{`NT. ${room.holidayPrice}假日`}</span>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="hotelReservation__listpage">
        <div
          className="hotelReservation__listpage--background"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
            url(${allImg[index]})`
          }}
        >
          <Icon />
          <div className="hotelReservation__listpage--background--info">
            <Information />
          </div>
        </div>
        <div className="hotelReservation__listpage--roomslist">
          <div className="hotelReservation__listpage--roomslist--cardwraper">
            {roomCards}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;