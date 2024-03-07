export const weatherOptions = [
  {
    url: require("../images/weather/day/cloudy.svg").default,
    day: true,
    type: "Clouds",
  },
  {
    url: require("../images/weather/day/fog.svg").default,
    day: true,
    type: "Fog",
    type: "Mist",
  },
  {
    url: require("../images/weather/day/snow.svg").default,
    day: true,
    type: "Snow",
  },
  {
    url: require("../images/weather/day/rain.svg").default,
    day: true,
    type: "Rain",
  },
  {
    url: require("../images/weather/day/sunny.svg").default,
    day: true,
    type: "Clear",
  },
  {
    url: require("../images/weather/day/storm.svg").default,
    day: true,
    type: "Thunderstorm",
  },
  {
    url: require("../images/weather/night/clear.svg").default,
    day: false,
    type: "Clear",
  },
  {
    url: require("../images/weather/night/cloudy.svg").default,
    day: false,
    type: "Clouds",
  },
  {
    url: require("../images/weather/night/fog.svg").default,
    day: false,
    type: "Fog",
    type: "Mist",
  },
  {
    url: require("../images/weather/night/rain.svg").default,
    day: false,
    type: "Rain",
  },
  {
    url: require("../images/weather/night/snow.svg").default,
    day: false,
    type: "Snow",
  },
  {
    url: require("../images/weather/night/storm.svg").default,
    day: false,
    type: "Thunderstorm",
  },
];

export const APIkey = "f69e43c1e4133c1dfb285207c79191e4";
export const latitude = "30.2666";
export const longitude = "-97.7333";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://StyleCast.twilightparadox.com"
    : "http://localhost:3001";
