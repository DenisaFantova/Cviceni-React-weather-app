import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";
import SelectCity from "./components/SelectCity";
import Loading from "./components/Loading";

import { getWeatherForecast } from "./utils/config.js";

const App = () => {
  const API_KEY = process.env.REACT_APP_MY_API_ID;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Boskovice");
  const [forecast, setForecast] = useState(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const handleChangeCity = (c) => {
    setCity(c);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity actualCity={city} onChange={handleChangeCity} />
        <div className="weather">
          {weather !== null || undefined ? (
            <WeatherCurrent weather={weather} />
          ) : (
            <Loading />
          )}

          <div className="weather__forecast" id="predpoved">
            {forecast !== null || undefined ? (
              forecast.map((forecastDay, index) => (
                <WeatherForecast
                  key={index}
                  index={index}
                  forecast={forecast}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;