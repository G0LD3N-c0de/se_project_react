import "../blocks/Header.css";
import logo from "../images/wtwr.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import { Link } from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
function Header({ onCreateModal, cityName }) {
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
        <button
          type="text"
          onClick={onCreateModal}
          className="header__add-button"
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__username">
          Julian Blanca
        </Link>
        <img
          src={avatar}
          alt="profile picture"
          className="header__profile-picture"
        />
      </div>
    </header>
  );
}

export default Header;
