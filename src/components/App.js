import "../blocks/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import {
  getForecastWeather,
  getTemperature,
  getCityName,
} from "../utils/weatherApi";
import { weatherOptions } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
} from "../utils/Api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  // ----- Toggle Switch ----- //

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  // -----  Item Handling ----- //

  const onAddItem = (item) => {
    addClothingItem(item).then((res) => {
      setClothingItems([...clothingItems, res]);
      handleCloseModal();
    });
  };

  const handleDeleteItem = () => {
    deleteClothingItem(selectedCard._id).then(() => {
      const updatedItems = clothingItems.filter(
        (item) => item._id !== selectedCard._id
      );
      setClothingItems(updatedItems);
      setSelectedCard({});
      handleCloseModal();
    });
  };

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

  // Retrieve clothing items
  useEffect(() => {
    getClothingItems().then((res) => {
      setClothingItems(res);
    });
  }, []);

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
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} cityName={city} />

        <Switch>
          <Route exact path="/profile">
            <Profile
              onSelectCard={handleselectedCard}
              clothingItems={clothingItems}
              handleCreateModal={handleCreateModal}
            />
          </Route>
          <Route path="/">
            <Main
              weatherTemp={temp[currentTemperatureUnit]}
              onSelectCard={handleselectedCard}
              weatherCondition={weatherCondition}
              clothingItems={clothingItems}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal handleClose={handleCloseModal} onAddItem={onAddItem} />
        )}
        {activeModal === "preview" && (
          <ItemModal
            onClose={handleCloseModal}
            selectedCard={selectedCard}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
