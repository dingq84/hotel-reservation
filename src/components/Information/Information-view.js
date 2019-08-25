import React from 'react';

import fbicon from '../../assets/images/facebook-square-brands.svg';
import igicon from '../../assets/images/instagram-brands.svg';
import homeicon from '../../assets/images/home-solid.svg';
import phoneicon from '../../assets/images/phone-alt-solid.svg';
import mailicon from '../../assets/images/envelope-solid.svg';

import './Information.scss';

const InformationView = () => (
  <>
    <div className="Information__media">
      <img
        className="Information__icon"
        src={fbicon}
        alt="fb icon" />
      <img
        className="Information__icon"
        src={igicon}
        alt="ig icon"
      />
    </div>
    <div className="Information__contact">
      <span>
        <img
          className="Information__icon"
          src={phoneicon}
          alt="phone icon" />
        <h5>02-17264937</h5>
      </span>
      <span>
        <img
          className="Information__icon"
          src={mailicon}
          alt="mail icon" />
        <h5>whitespace@whitespace.com.tw</h5>
      </span>
      <span>
        <img
          className="Information__icon"
          src={homeicon}
          alt="home icon" />
        <h5>台北市羅斯福路十段30號</h5>
      </span>
    </div>
  </>
);

export default InformationView