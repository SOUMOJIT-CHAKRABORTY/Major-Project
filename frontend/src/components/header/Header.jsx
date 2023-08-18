import "./header.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { setDate } from "date-fns";
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil


const Header = () => {
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport Taxis</span>
        </div>
    </div>
    <h1 className="headerTitle">A lifetime of discounts?It's a genius.</h1>
    <p className="headerDesc">
      Get rewarded for your travels unlock instant savings of 10% or more with a free rupambookng account
    </p>
    <button className="headerBtn">Sign in/Register</button>
    <div className="headerSearch">
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faBed} className="headerIcon" />
      <input type="text"
       placeholder="where are you going?"
       className="headerSearchInput"/>
    </div>
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
      <span className="headerSearchText">Date to date</span>
      <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>
      </div>
      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faPerson} className="headerIcon" />
      <span className="headerSearchText">2 Adults 2 Children 2 Room</span>
      <div className="headerSearchItem">
      <button className="headerBtn">Search</button>
      </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Header