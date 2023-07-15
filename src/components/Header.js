import "../blocks/Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
function Header({ onCreateModal }) {
  return (
    <header className="header">
      <div className="header__left">
        <img src={require("../images/wtwr.svg").default} alt="logo" />
        <div>{currentDate}</div>
      </div>
      <div className="header__right">
        <button
          type="text"
          onClick={onCreateModal}
          className="header__add-button"
        >
          + Add Clothes
        </button>
        <div>Name</div>
        <img src={require("../images/avatar.svg").default} alt="profile" />
      </div>
    </header>
  );
}

export default Header;
