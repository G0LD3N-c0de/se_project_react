import "../blocks/Header.css";
import logo from "../images/wtwr.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
function Header({
  onCreateModal,
  cityName,
  isLoggedIn,
  onLoginModal,
  onRegisterModal,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__location">
          {currentDate}, {cityName}
        </div>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="text"
              onClick={onCreateModal}
              className="header__button"
            >
              + Add Clothes
            </button>
            <Link to="/profile" className="header__username">
              {currentUser.name}
            </Link>
            <img
              src={currentUser.avatar}
              alt={currentUser.name[0]}
              className="header__profile-picture"
            />
          </>
        ) : (
          <>
            <button
              type="text"
              className="header__button"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>
            <button
              type="text"
              className="header__button"
              onClick={onLoginModal}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
