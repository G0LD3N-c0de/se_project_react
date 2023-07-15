import "../blocks/Weather.css";

const weatherOptions = [
  {
    url: require("../images/weather/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/weather/day/fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../images/weather/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/weather/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/weather/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/weather/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/weather/night/clear.svg").default,
    day: false,
    type: "clear",
  },
  {
    url: require("../images/weather/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/weather/night/fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../images/weather/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/weather/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/weather/night/storm.svg").default,
    day: false,
    type: "storm",
  },
];

function Weather({ type, day, weatherTemp }) {
  const imageSelector = weatherOptions.filter((i) => {
    return i.type === type && i.day === day;
  });

  const imageUrl = imageSelector[0].url;

  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img src={imageUrl} alt="weather display" className="weather__image" />
    </section>
  );
}

export default Weather;
