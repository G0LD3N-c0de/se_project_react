import "../blocks/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import {
  getForecastWeather,
  getTemperature,
  getCityName,
} from "../utils/weatherAPI";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleselectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getForecastWeather().then((res) => {
      const temperature = getTemperature(res);
      const cityName = getCityName(res);
      setTemp(temperature);
      setCity(cityName);
    });
  }, []);

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} cityName={city} />
      <Main weatherTemp={temp} onSelectCard={handleselectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title={"New Garment"}
          buttonText={"Add Garment"}
          onClose={handleCloseModal}
        >
          <label className="modal__label" name="name" for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            className="modal__input"
          />
          <label className="modal__label" for="link">
            Image
          </label>
          <input
            type="url"
            name="link"
            id="link"
            minLength="1"
            maxLength="30"
            placeholder="Image URL"
            className="modal__input"
          />
          <p>Select the weather type:</p>
          <div className="modal__radio-buttons">
            <div>
              <input type="radio" name="weatherType" value="Hot"></input>
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" name="weatherType" value="Warm"></input>
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" name="weatherType" value="Cold"></input>
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal onClose={handleCloseModal} selectedCard={selectedCard} />
      )}
    </div>
  );
}

export default App;
