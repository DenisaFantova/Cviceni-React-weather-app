import React, {useState, useEffect} from "react";
import "./App.css";
import WeatherCurrent from "./components/WeatherCurrent";

const App = () => {

  const API_KEY = process.env.REACT_APP_MY_API_ID

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Boskovice');

  const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
    .then(response => response.json() )
    .then(data => {
      setWeather(data)  
      console.log(data)
    })
  }

  useEffect(() => {
    fetchWeather(city)
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          <div className="button-group">
            <button className="button" onClick={(e) => setCity(e.target.innerText)}>Prague</button>
            <button className="button" onClick={(e) => setCity(e.target.innerText)}>Reykjavik</button>
            <button className="button" onClick={(e) => setCity(e.target.innerText)}>Tenerife</button>
          </div>
          {weather !== null || undefined ? <WeatherCurrent weather={weather}/> : null}
          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day">Day, date</div>
              <div className="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div className="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
