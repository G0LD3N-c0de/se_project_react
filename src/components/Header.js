import "../blocks/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src="/images/wtwr.svg" />
        <div>Date</div>
      </div>
      <div className="header__right">
        <button type="text">+ Add Clothes</button>
        <div>Name</div>
        <img src="/images/avatar.svg" />
      </div>
    </header>
  );
}

export default Header;
