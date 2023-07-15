import ItemCard from "./ItemCard";
import Weather from "./Weather";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <Weather type="snow" day={true} weatherTemp={weatherTemp} />
      <section className="cards">
        <div className="cards__weather-info">
          Today is {weatherTemp} / You may want to wear:
        </div>
        <div className="cards__wrapper">
          {defaultClothingItems.map((i) => {
            return <ItemCard i={i} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
