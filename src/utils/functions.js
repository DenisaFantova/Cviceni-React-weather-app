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

export const getDateForecast = (unixDate) => {
  const date = new Date(unixDate * 1000);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} `;
};

export const getSunrise = (unixSunrise) => {
  const hours = new Date(unixSunrise * 1000).getHours();
  const minutes = new Date(unixSunrise * 1000).getMinutes();
  const doubleDigitsMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${doubleDigitsMinutes}`;
};

export const getSunset = (unixSunset) => {
  const hours = new Date(unixSunset * 1000).getHours();
  const minutes = new Date(unixSunset * 1000).getMinutes();
  const doubleDigitsMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${doubleDigitsMinutes}`;
};

export const getWeatherForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};
