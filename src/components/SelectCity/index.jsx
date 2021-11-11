import React from "react";
import "./style.css";
import { cities } from "../../utils/cities.js";

const SelectCity = ({ actualCity, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="select-wrapper">
      <select
        className="select"
        name="cityselect"
        id="cityselect"
        value={actualCity}
        onChange={handleChange}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCity;
