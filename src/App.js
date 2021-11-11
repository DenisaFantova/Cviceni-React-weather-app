import React, { useState, useEffect } from "react";
import "./App.css";

import SelectCity from "./components/SelectCity";
import Weather from "./components/Weather";

import { getWeatherForecast } from "./utils/functions";

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

  const handleChangeCity = (c) => {
    setCity(c);
  };

  useEffect(() => {
    fetchWeather(city);
    fetchWeatherForecast(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);  

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity actualCity={city} onChange={handleChangeCity} />
        <Weather weather={weather} forecast={forecast}/>
      </div>
    </div>
  );
};

export default App;
