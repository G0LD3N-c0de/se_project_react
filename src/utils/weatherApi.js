const APIkey = "f69e43c1e4133c1dfb285207c79191e4";
const latitude = "30.2672";
const longitude = "-97.7431";

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

const object = {
  coord: {
    lon: -97.7431,
    lat: 30.2672,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 95.88,
    feels_like: 98.47,
    temp_min: 92.34,
    temp_max: 98.62,
    pressure: 1017,
    humidity: 36,
  },
  visibility: 10000,
  wind: {
    speed: 8.05,
    deg: 150,
  },
  clouds: {
    all: 75,
  },
  dt: 1689559159,
  sys: {
    type: 2,
    id: 2003218,
    country: "US",
    sunrise: 1689507586,
    sunset: 1689557632,
  },
  timezone: -18000,
  id: 4671654,
  name: "Austin",
  cod: 200,
};
