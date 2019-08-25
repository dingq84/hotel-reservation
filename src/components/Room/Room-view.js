import React from 'react';

import WIFI from '../../assets/images/wifi.svg';
import Phone from '../../assets/images/phone.svg';
import Bar from '../../assets/images/bar.svg';
import Breakfast from '../../assets/images/breakfast.svg';
import Breeze from '../../assets/images/breeze.svg';
import Crawling from '../../assets/images/crawling-baby-silhouette.svg';
import Dog from '../../assets/images/dog.svg';
import Mountain from '../../assets/images/mountain-range.svg';
import Smoke from '../../assets/images/no-smoke-symbol.svg';
import Tick from '../../assets/images/tick-inside-circle.svg';

import './Room-view.scss';

const RoomSingle = (props) => {
  const { room, booking } = props.data;
  return (
    <div className="hotelReservation__single">
      <div className="hotelReservation__single--background">

      </div>
      <div className="hotelReservation__single--content">
        <div className="hotelReservation__single--content--intro">
          <h1>{room[0].name}</h1>
          <ul>
            <li>房客人數限制： 1~1 人</li>
            <li>床型：單人床</li>
            <li>衛浴數量： 1 間</li>
            <li>房間大小： 18 平方公尺</li>
          </ul>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos impedit ratione voluptatem omnis esse nesciunt ipsa! Sit libero eaque ex numquam, mollitia maiores inventore quo officia molestias fugit, qui nam.</p>
          <span>\\\</span>
          <h3>Check in</h3>
          <h2>15:00 -- 21:00</h2>
          <div>
            <img src={WIFI} alt="WIFI" />
            <img src={WIFI} alt="WIFI" />
            <img src={WIFI} alt="WIFI" />
            <img src={WIFI} alt="WIFI" />
            <img src={WIFI} alt="WIFI" />
            <img src={WIFI} alt="WIFI" />
          </div>
        </div>
        <div className="hotelReservation__single--content--order">
          <div className="hotelReservation__single--content--order--date">
            <input type="date" />
          </div>
          <button>預約時段</button>
        </div>
      </div>
    </div>
  );
};

export default RoomSingle;