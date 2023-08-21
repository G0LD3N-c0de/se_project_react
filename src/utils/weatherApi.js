const APIkey = "f69e43c1e4133c1dfb285207c79191e4";
const latitude = "34.6937";
const longitude = "135.5023";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const getTemperature = (data) => {
  const main = data.main;
  const temperature = main.temp;
  return Math.ceil(temperature);
};

export const getCityName = (data) => {
  const cityName = data["name"];
  return cityName;
};
