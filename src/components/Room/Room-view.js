import React from 'react';
import { Link } from 'react-router-dom';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';

import Logo from '../../assets/images/logo_block.svg';
import WIFI from '../../assets/images/wifi.svg';
import Phone from '../../assets/images/phone.svg';
import Bar from '../../assets/images/bar.svg';
import Breakfast from '../../assets/images/breakfast.svg';
import Breeze from '../../assets/images/breeze.svg';
import Crawling from '../../assets/images/crawling-baby-silhouette.svg';
import Dog from '../../assets/images/dog.svg';
import Mountain from '../../assets/images/mountain-range.svg';
import Smoke from '../../assets/images/no-smoke-symbol.svg';
import Refrigerator from '../../assets/images/refrigerator-svgrepo-com.svg';
// import Tick from '../../assets/images/tick-inside-circle.svg';
import Service from '../../assets/images/room_service.svg';
import Sofa from '../../assets/images/family-sofa-svgrepo-com.svg';

import 'react-dates/lib/css/_datepicker.css';
import './Room-view.scss';

const RoomSingle = (props) => {
  const { room, booking } = props.data;
  const { amenities,
    checkInAndOut,
    description,
    descriptionShort,
    imageUrl,
    name,
    normalDayPrice,
    holidayPrice } = room[0];
  return (
    <div className="hotelReservation__single">
      <div className="hotelReservation__single--background">
        <div
          className="hotelReservation__single--background--main"
          style={{
            backgroundImage: `url(${imageUrl[0]})`
          }}
        >
          <Link to='/roomslist/'>
            <img src={Logo} alt='logo' />
          </Link>

        </div>
        <div
          className="hotelReservation__single--background--other"
        >
          <div
            style={{
              backgroundImage: `url(${imageUrl[1]})`
            }}>

          </div>
          <div
            style={{
              backgroundImage: `url(${imageUrl[2]})`
            }}
          >

          </div>
        </div>
      </div>
      <div className="hotelReservation__single--content">
        <div className="hotelReservation__single--content--intro">
          <h1>{name}</h1>
          <ul>
            <li>
              {`房客人數限制： ${descriptionShort.GuestMin}~${descriptionShort.GuestMax} 人`}</li>
            <li>{`床型：${descriptionShort.Bed.map($0 => $0)}`}</li>
            <li>{`衛浴數量： ${descriptionShort['Private-Bath']}間`}</li>
            <li>{`房間大小： ${descriptionShort.Footage}平方公尺`}</li>
          </ul>
          <p>{description}</p>
          <span>\\\</span>
          <span>
            <h3>Check in</h3>
            <h3>Check out</h3>
          </span>
          <span>
            <h2>{`${checkInAndOut.checkInEarly} -- ${checkInAndOut.checkInLate}`}</h2>
            <h2>{checkInAndOut.checkOut}</h2>
          </span>
          <div className='hotelReservation__single--content--intro--icon'>
            <span>
              <img
                src={WIFI}
                alt="WIFI"
                style={{
                  filter:
                    (amenities['Wi-Fi']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Wi-Fi']) ? '#000' : '#ccc'
                }}
              >WI-FI</h6>
            </span>
            <span>
              <img
                src={Phone}
                alt="phone"
                style={{
                  filter:
                    (amenities['Television']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }}
              />
              <h6
                style={{
                  color:
                    (amenities['Television']) ? '#000' : '#ccc'
                }}>電話</h6>
            </span>
            <span>
              <img
                src={Mountain}
                alt="view"
                style={{
                  filter:
                    (amenities['Great-View']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Great-View']) ? '#000' : '#ccc'
                }}
              >遼闊的視野</h6>
            </span>
            <span>
              <img
                src={Breakfast}
                alt="breackfast"
                style={{
                  filter:
                    (amenities['Breakfast']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Breakfast']) ? '#000' : '#ccc'
                }}>早餐</h6>
            </span>
            <span>
              <img
                src={Breeze}
                alt="air condition"
                style={{
                  filter:
                    (amenities['Air-Conditioner']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Air-Conditioner']) ? '#000' : '#ccc'
                }}>空調</h6>
            </span>
            <span>
              <img
                src={Smoke}
                alt="No smoke"
                style={{
                  filter:
                    (amenities['Smoke-Free']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Smoke-Free']) ? '#000' : '#ccc'
                }}>禁止吸菸</h6>
            </span>
            <span>
              <img
                src={Bar}
                alt="Bar"
                style={{
                  filter:
                    (amenities['Mini-Bar']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Mini-Bar']) ? '#000' : '#ccc'
                }}>Mini Bar</h6>
            </span>
            <span>
              <img
                src={Refrigerator}
                alt="refrigerator"
                style={{
                  filter:
                    (amenities['Refrigerator']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6 style={{
                color:
                  (amenities['Refrigerator']) ? '#000' : '#ccc'
              }}>冰箱</h6>
            </span>
            <span>
              <img
                src={Crawling}
                alt="Crawling"
                style={{
                  filter:
                    (amenities['Child-Friendly']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Child-Friendly']) ? '#000' : '#ccc'
                }}>適合兒童</h6>
            </span>
            <span>
              <img
                src={Service}
                alt="room service"
                style={{
                  filter:
                    (amenities['Room-Service']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Room-Service']) ? '#000' : '#ccc'
                }}>Room Service</h6>
            </span>
            <span>
              <img
                src={Sofa}
                alt="sofa"
                style={{
                  filter:
                    (amenities['Sofa']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Sofa']) ? '#000' : '#ccc'
                }}>沙發</h6>
            </span>
            <span>
              <img
                src={Dog}
                alt="pets"
                style={{
                  filter:
                    (amenities['Pet-Friendly']) ? '' :
                      'invert(0.5) sepia(1) saturate(0) hue-rotate(0deg)'
                }} />
              <h6
                style={{
                  color:
                    (amenities['Pet-Friendly']) ? '#000' : '#ccc'
                }}>寵物攜帶</h6>
            </span>
          </div>
          <div className='hotelReservation__single--content--intro--price'>
            <h4>{`NT .${normalDayPrice}`}</h4>
            <h5>平日(一~四)</h5>
            <h4>{`NT .${holidayPrice}`}</h4>
            <h5>假日(五~日)</h5>
          </div>
        </div>
        <div className="hotelReservation__single--content--order">
          <div className="hotelReservation__single--content--order--date">
            <DayPickerRangeController
              // startDate={{ default: '2019-08-25' }} // momentPropTypes.momentObj or null,
              // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => console.log(startDate, endDate)} // PropTypes.func.isRequired,
              focusedInput='startDate' // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            // onFocusChange={focusedInput => console.log(focusedInput)} // PropTypes.func.isRequired,
            // initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
            />
          </div>
          <button>預約時段</button>
        </div>
      </div>
    </div>
  );
};

export default RoomSingle;