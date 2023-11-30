import "./list.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "axios";

const List = () => {
  const location = useLocation();
  const [trains, setTrains] = useState(location.state.data);
  const [from, setFrom] = useState(location.state.from);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);

  //   console.log(trains);

  // console.log(location)
  useEffect(() => {
    if (input.trim() !== "") {
      // Fetch station name suggestions from the backend
      axios
        .get(`http://localhost:3000/trains/api/stationSuggestions/${input}`)
        .then((response) => setSuggestions(response.data.suggestions))
        .catch((error) => console.error("Error fetching suggestions:", error));
    } else {
      setSuggestions([]);
    }
  }, [input]);

  useEffect(() => {
    if (input2.trim() !== "") {
      // Fetch station name suggestions from the backend
      axios
        .get(`http://localhost:3000/trains/api/stationSuggestions/${input2}`)
        .then((response) => setSuggestions2(response.data.suggestions))
        .catch((error) => console.error("Error fetching suggestions:", error));
    } else {
      setSuggestions2([]);
    }
  }, [input2]);

  const handleSuggestionClick = (selectedStation) => {
    setInput("");
    setSuggestions([]);
    setFrom(selectedStation);
  };
  const handleSuggestionClick2 = (selectedStation) => {
    setInput2("");
    setSuggestions([]);
    setDestination(selectedStation);
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
          date: date[0].startDate,
        }),
      });
      const data = await response.json();
      setTrains(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>From</label>
              <input
                placeholder={from}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <ul>
                {suggestions.map((station, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(station)}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
              <ul>
                {suggestions2.map((station, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick2(station)}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lsItem">
              <label>On-Board Date : </label>
              <span onClick={() => setOpenDate(!openDate)}>{`on ${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small></small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small></small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Seat</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResults">
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
            {trains ? (
              trains.map((train) => (
                <SearchItem key={train._id} train={train} />
              ))
            ) : (
              <h1>No trains found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
