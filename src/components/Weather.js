import "../blocks/Weather.css";

const weatherOptions = [
  { url: "/images/weather/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/weather/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/weather/day/fog.svg", day: true, type: "fog" },
  { url: "/images/weather/day/snow.svg", day: true, type: "snow" },
  { url: "/images/weather/day/rain.svg", day: true, type: "rain" },
  { url: "/images/weather/day/storm.svg", day: true, type: "storm" },
  { url: "/images/weather/night/clear.svg", day: false, type: "clear" },
  { url: "/images/weather/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/weather/night/fog.svg", day: false, type: "fog" },
  { url: "/images/weather/night/rain.svg", day: false, type: "rain" },
  { url: "/images/weather/night/snow.svg", day: false, type: "snow" },
  { url: "/images/weather/night/storm.svg", day: false, type: "storm" },
];

function Weather({ type, day }) {
  const imageSelector = weatherOptions.filter((i) => {
    return i.type === type && i.day === day;
  });

  const imageUrl = imageSelector[0].url;

  return (
    <section className="weather">
      <div className="weather__info">75F</div>
      <img src={imageUrl} alt="weather display" className="weather__image" />
    </section>
  );
}

export default Weather;
