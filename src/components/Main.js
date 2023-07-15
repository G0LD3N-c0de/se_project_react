import ItemCard from "./ItemCard";
import Weather from "./Weather";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <Weather type="snow" day={true} weatherTemp={weatherTemp} />
      <section className="cards">
        <div className="cards__weather-info">
          Today is {weatherTemp}° F / You may want to wear:
        </div>
        <div className="cards__wrapper">
          {filteredCards.map((i) => {
            return <ItemCard i={i} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
