import "../blocks/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddItemModal from "./AddItemModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import EditProfileModal from "./EditProfileModal";
import { signUp, signIn } from "../utils/auth";
import { checkToken } from "../utils/auth";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import {
  getForecastWeather,
  getTemperature,
  getCityName,
} from "../utils/weatherApi";
import { weatherOptions } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  editProfileData,
} from "../utils/Api";
import ProtectedRoute from "./ProtectedRoute";
import { likeClothingItem, unlikeClothingItem } from "../utils/Api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    name: "",
    avatar: "",
    email: "",
  });
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ----- Toggle Switch ----- //

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // ----- User Registration ----- //

  const registerUser = async (data) => {
    setIsLoading(true);
    try {
      const signUpResponse = await signUp(data);
      console.log(signUpResponse);

      const signInResponse = await signIn(data);

      localStorage.setItem("jwt", signInResponse.token);
      setIsLoggedIn(true);

      const checkTokenResponse = await checkToken(signInResponse.token);
      setCurrentUser({
        _id: checkTokenResponse._id,
        name: checkTokenResponse.name,
        avatar: checkTokenResponse.avatar,
        email: checkTokenResponse.email,
      });
      handleCloseModal();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // ----- User SignIn & SignOut ----- //

  const signInUser = (data) => {
    setIsLoading(true);
    signIn(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(res.token);
        setIsLoggedIn(true);
        checkToken(res.token).then((res) => {
          setCurrentUser({
            _id: res._id,
            name: res.name,
            avatar: res.avatar,
            email: res.email,
          });
        });
      })
      .finally(() => {
        handleCloseModal();
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({
      _id: "",
      name: "",
      avatar: "",
      email: "",
    });
  };

  // ----- Edit Profile ----- //

  const editProfile = (data) => {
    setIsLoading(true);
    editProfileData(data, token)
      .then((res) => {
        setCurrentUser({
          _id: res._id,
          name: res.name,
          avatar: res.avatar,
          email: res.email,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        handleCloseModal();
      });
  };

  // -----  Item Handling ----- //

  const onAddItem = (item) => {
    setIsLoading(true);
    addClothingItem(item, token)
      .then((res) => {
        setClothingItems([...clothingItems, res]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
        handleCloseModal();
      });
  };

  const handleDeleteItem = () => {
    deleteClothingItem(selectedCard._id, token)
      .then(() => {
        const updatedItems = clothingItems.filter(
          (item) => item._id !== selectedCard._id
        );
        setClothingItems(updatedItems);
        setSelectedCard({});
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    // Check if this card is now liked
    if (!isLiked) {
      likeClothingItem(id, token)
        .then((updatedCard) => {
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      unlikeClothingItem(id, token)
        .then((updatedCard) => {
          console.log(updatedCard);
          setClothingItems((cards) =>
            cards.map((c) => (c._id === id ? updatedCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleselectedCard = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
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

    const imageSelector = weatherOptions.find((option) => {
      return option.type === data.weather[0].main && option.day === isDay;
    });
    const imageUrl = imageSelector.url;
    return imageUrl;
  };

  // ----- BEGIN USE EFFECTS ----- //

  // Check for token and automatically login if token is present
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      checkToken(jwt)
        .then((res) => {
          setCurrentUser({
            _id: res._id,
            name: res.name,
            avatar: res.avatar,
            email: res.email,
          });
          setIsLoggedIn(true);
          setToken(jwt);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  // Retrieve clothing items
  useEffect(() => {
    getClothingItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error(err);
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            cityName={city}
            isLoggedIn={isLoggedIn}
            onLoginModal={handleLoginModal}
            onRegisterModal={handleRegisterModal}
          />

          <Switch>
            <ProtectedRoute exact path="/profile" loggedIn={isLoggedIn}>
              <Profile
                onSelectCard={handleselectedCard}
                clothingItems={clothingItems}
                handleCreateModal={handleCreateModal}
                handleEditProfileModal={handleEditProfileModal}
                signOut={signOut}
                isLoggedIn={isLoggedIn}
                handleCardLike={handleCardLike}
              />
            </ProtectedRoute>
            <Route path="/">
              <Main
                weatherTemp={temp[currentTemperatureUnit]}
                onSelectCard={handleselectedCard}
                weatherCondition={weatherCondition}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
                handleCardLike={handleCardLike}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleClose={handleCloseModal}
              onAddItem={onAddItem}
              isLoading={isLoading}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              onClose={handleCloseModal}
              selectedCard={selectedCard}
              handleDeleteItem={handleDeleteItem}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleClose={handleCloseModal}
              signInUser={signInUser}
              isLoading={isLoading}
              redirect={handleRegisterModal}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleClose={handleCloseModal}
              registerUser={registerUser}
              isLoading={isLoading}
              redirect={handleLoginModal}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              handleClose={handleCloseModal}
              editProfile={editProfile}
              isLoading={isLoading}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
