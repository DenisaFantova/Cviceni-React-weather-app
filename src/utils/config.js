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

export const getDateForest = (unixdate) => {
  const date = new Date(unixdate * 1000);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} `;
};

export const getSunrise = (sunrise) => {
  const hours = new Date(sunrise * 1000).getHours();
  const minutes = new Date(sunrise * 1000).getMinutes();
  const doubleDigitsMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${doubleDigitsMinutes}`;
};

export const getSunset = (sunset) => {
  const hours = new Date(sunset * 1000).getHours();
  const minutes = new Date(sunset * 1000).getMinutes();
  const doubleDigitsMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${doubleDigitsMinutes}`;
};

export const getWeatherForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};
