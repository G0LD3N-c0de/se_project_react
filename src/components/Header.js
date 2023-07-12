import "../blocks/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={require("../images/wtwr.svg").default} alt="logo" />
        <div>Date</div>
      </div>
      <div className="header__right">
        <button type="text">+ Add Clothes</button>
        <div>Name</div>
        <img src={require("../images/avatar.svg").default} alt="profile" />
      </div>
    </header>
  );
}

export default Header;
