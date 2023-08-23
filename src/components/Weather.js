import "../blocks/Weather.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Weather({ weatherCondition = "", weatherTemp }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather">
      <div className="weather__info">
        {weatherTemp}
        {currentTemperatureUnit === "F" ? "°F" : "°C"}
      </div>
      <img
        src={weatherCondition}
        alt="weather display"
        className="weather__image"
      />
    </section>
  );
}

export default Weather;
