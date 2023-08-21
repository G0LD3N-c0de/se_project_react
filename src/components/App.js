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
} from "../utils/weatherApi";
import { weatherOptions } from "../utils/constants";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");

  // ----- Toggle Switch ----- //

  // ----- End Toggle Switch ----- //

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

  const getImageURL = (data) => {
    const time = Math.ceil(Date.now() / 1000);
    let isDay;
    if (time >= data.sys.sunrise && time <= data.sys.sunset) {
      isDay = true;
    } else {
      isDay = false;
    }

    const imageSelector = weatherOptions.filter((option) => {
      return option.type === data.weather[0].main && option.day === isDay;
    });
    const imageUrl = imageSelector[0].url;
    return imageUrl;
  };

  // ----- BEGIN USE EFFECTS ----- //

  // Get weather info and render appropriate data
  useEffect(() => {
    getForecastWeather()
      .then((res) => {
        const temperature = getTemperature(res);
        const cityName = getCityName(res);
        const imageUrl = getImageURL(res);
        setTemp(temperature);
        setCity(cityName);
        setWeatherCondition(imageUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Apply remote close and esc close to modals
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    const handleRemoteClose = (evt) => {
      if (evt.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleRemoteClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleRemoteClose);
    };
  }, [activeModal]);

  // ----- END USE EFFECTS ----- //

  return (
    <div className="page">
      <Header onCreateModal={handleCreateModal} cityName={city} />
      <Main
        weatherTemp={temp}
        onSelectCard={handleselectedCard}
        weatherCondition={weatherCondition}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title={"New Garment"}
          name={"create"}
          buttonText={"Add Garment"}
          onClose={handleCloseModal}
        >
          <label className="modal__label" name="name" htmlFor="name">
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
            required
          />
          <label className="modal__label" htmlFor="link">
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
            required
          />
          <p>Select the weather type:</p>
          <div className="modal__radio-buttons">
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                name="weatherType"
                value="Hot"
                id="Hot"
                required
              ></input>
              <label htmlFor="Hot" className="modal__radio-label">
                Hot
              </label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                name="weatherType"
                value="Warm"
                id="Warm"
                required
              ></input>
              <label htmlFor="Warm" className="modal__radio-label">
                Warm
              </label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                name="weatherType"
                value="Cold"
                id="Cold"
                required
              ></input>
              <label htmlFor="Cold" className="modal__radio-label">
                Cold
              </label>
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
