import "../blocks/Weather.css";

function Weather({ weatherCondition = "", weatherTemp }) {
  return (
    <section className="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img
        src={weatherCondition}
        alt="weather display"
        className="weather__image"
      />
    </section>
  );
}

export default Weather;
