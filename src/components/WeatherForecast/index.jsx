import React from "react";
import "./style.css";
import { getDateForest } from "./../../utils/config.js";

const WeatherForecast = ({ forecast, index }) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // const getDateForest = (unixdate) => {
  //   const date = new Date(unixdate * 1000);
  //   return `${days[date.getDay()]}, ${
  //     months[date.getMonth()]
  //   } ${date.getDate()} `;
  // };

  return (
    <div className="forecast">
      <div className="forecast__day">{getDateForest(forecast[index].dt)}</div>
      <div className="forecast__icon">
        {
          <img
            src={`http://openweathermap.org/img/wn/${forecast[index].weather[0].icon}@2x.png`}
            style={{ height: "100%" }}
            alt="current weather icon"
          />
        }
      </div>
      <div className="forecast__temp">
        {" "}
        {Math.round(forecast[index].main.temp)}°C
      </div>
    </div>
  );
};

export default WeatherForecast;
