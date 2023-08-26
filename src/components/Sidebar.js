import "../blocks/SideBar.css";
import avatar from "../images/avatar.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__info">
        <img src={avatar} alt="profile image" className="sidebar__avatar"></img>
        <p className="sidebar__username">Julian Blanca</p>
      </div>
    </div>
  );
}

export default Sidebar;
