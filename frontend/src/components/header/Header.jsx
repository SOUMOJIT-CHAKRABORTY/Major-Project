import "./header.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faTicket,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { setDate } from "date-fns";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:3000/trains/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: destination,
          date: format(date[0].startDate, "MM/dd/yyyy"),
        }),
      });
      const data = await response.json();
      navigate("/hotels", {
        state: { from, destination, date, options, data },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          {/* <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Ticketo</span>
        </div> */}
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faTicket} /> */}
            <span></span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faCar} /> */}
            <span></span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faBed} /> */}
            <span></span>
          </div>
          <div className="headerListItem">
            {/* <FontAwesomeIcon icon={faTaxi} /> */}
            <span></span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle"></h1>
            <p className="headerDesc"></p>
            {/* <button className="headerBtn"></button> */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faTrain} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="headerSearchInput"
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faTrain} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Enter Destination"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {" "}
                  {` on ${format(date[0].startDate, "MM/dd/yyyy")} `}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · `}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Passenger</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* <div className="optionItem">
          <span className="optionText">Room</span>
          <div className="optionCounter">
          <button 
           disabled={options.room<= 1}
          className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
          <span className="optionCounterNumber">{options.room}</span>
          <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
          </div> */}
                    {/* </div> */}
                  </div>
                )}
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search Trains
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
