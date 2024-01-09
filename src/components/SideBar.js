import "../blocks/SideBar.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleEditProfileModal }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <img
          src={currentUser.avatar}
          alt={currentUser.name[0]}
          className="sidebar__avatar"
        ></img>
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button onClick={handleEditProfileModal} className="sidebar__button">
        Change profile data
      </button>
      <button className="sidebar__button">Log out</button>
    </div>
  );
}

export default SideBar;
