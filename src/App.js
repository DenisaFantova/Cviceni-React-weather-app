import React, { useState, useEffect } from "react";
import "./App.css";
import { config } from "./utils/config.js";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  const API_KEY = process.env.REACT_APP_MY_API_ID;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Boskovice");
  const [forecast, setForecast] = useState(null);

  const getWeatherForecast = (array) => {
    return array.filter((_, index) => index % 8 === 0);
  };

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  const fetchWeatherForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(getWeatherForecast(data.list));
      });
  };

  useEffect(() => {
    fetchWeather(city);
    fetchWeatherForecast(city);
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          <div className="button-group">
            <button
              className="button"
              onClick={(e) => setCity(e.target.innerText)}
            >
              Prague
            </button>
            <button
              className="button"
              onClick={(e) => setCity(e.target.innerText)}
            >
              Reykjavik
            </button>
            <button
              className="button"
              onClick={(e) => setCity(e.target.innerText)}
            >
              Tenerife
            </button>
          </div>
          {weather !== null || undefined ? (
            <WeatherCurrent weather={weather} />
          ) : null}

          <div className="weather__forecast" id="predpoved">
            {forecast !== null || undefined
              ? forecast.map((forecastDay, index) => (
                  <WeatherForecast
                    key={index}
                    index={index}
                    forecast={forecast}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
