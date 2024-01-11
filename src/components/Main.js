import ItemCard from "./ItemCard";
import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import { useMemo, useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  weatherCondition,
  clothingItems,
  isLoggedIn,
  handleCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (weatherTemp >= 86) {
        return "hot";
      } else if (weatherTemp >= 66 && weatherTemp <= 85) {
        return "warm";
      } else if (weatherTemp <= 65) {
        return "cold";
      }
    } else {
      if (weatherTemp >= 30) {
        return "hot";
      } else if (weatherTemp >= 19 && weatherTemp <= 29) {
        return "warm";
      } else if (weatherTemp <= 18) {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        weatherCondition={weatherCondition}
        weatherTemp={weatherTemp}
      />
      <section className="cards">
        <div className="cards__weather-info">
          Today is {weatherTemp}
          {currentTemperatureUnit === "F" ? "°F" : "°C"} / You may want to wear:
        </div>
        <div className="cards__wrapper">
          {filteredCards.map((card) => {
            return (
              <ItemCard
                card={card}
                key={card._id}
                onSelectCard={onSelectCard}
                isLoggedIn={isLoggedIn}
                handleCardLike={handleCardLike}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
