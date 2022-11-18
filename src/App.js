import './App.css';
import React, { useState } from "react";
  import axios from "axios";
function App() {
    const [city, setCity] = useState("");
  
    let [text, setText] = useState("");
    function showTemperature(response) {
      let elements = (
        <ul>
          <li>Temperature : {Math.round(response.data.main.temp)}</li>
          <li>Description : {response.data.weather[0].description}</li>
          <li>Wind : {Math.round(response.data.wind.speed)} km/h</li>
          <li>Humidity: {Math.round(response.data.main.humidity)}%</li>
        </ul>
      );
      setText(elements);
    }
    function handleSubmit(event) {
      let apiKey = "094780c710fa4efd669f0df8c3991927";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(showTemperature);
      event.preventDefault();
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    return (
      <div>
        <div className="div">
          <div>Weather App</div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type a City" onChange={updateCity} />
            <input className="search" type="submit" value="Search" />
          </form>
        </div>
        <span className="text">{text}</span>
      </div>
    );
  }

export default App;
