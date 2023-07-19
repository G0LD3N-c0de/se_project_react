import "../blocks/Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
function Header({ onCreateModal, cityName }) {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src={require("../images/wtwr.svg").default}
          alt="logo"
          className="header__logo"
        />
        <div className="header__location">
          {currentDate}, {cityName}
        </div>
      </div>
      <div className="header__right">
        <button
          type="text"
          onClick={onCreateModal}
          className="header__add-button"
        >
          + Add Clothes
        </button>
        <div className="header__username">Name</div>
        <img
          src={require("../images/avatar.svg").default}
          alt="profile"
          className="header__profile-picture"
        />
      </div>
    </header>
  );
}

export default Header;
