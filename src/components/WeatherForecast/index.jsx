import React from "react";
import "./style.css";
import { getDateForest } from "../../utils/config.js";

const WeatherForecast = ({ forecast, index }) => {

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
