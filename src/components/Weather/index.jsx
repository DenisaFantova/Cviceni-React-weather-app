import React from "react";
import WeatherCurrent from "../WeatherCurrent";
import WeatherForecast from "../WeatherForecast";
import Loading from "../Loading";

const Weather = ({ weather, forecast }) => {
  return (
    <div className="weather">
      {weather !== null || undefined ? (
        <WeatherCurrent weather={weather} />
      ) : (
        <Loading />
      )}

      <div className="weather__forecast" id="predpoved">
        {forecast !== null || undefined ? (
          forecast.map((_, index) => (
            <WeatherForecast key={index} index={index} forecast={forecast} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Weather;
