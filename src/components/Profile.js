import avatar from "../images/avatar.svg";
import "../blocks/Profile.css";
import ItemCard from "./ItemCard";

function Profile({ onSelectCard, clothingItems, handleCreateModal }) {
  return (
    <section className="profile">
      <div className="profile__info">
        <img src={avatar} alt="profile image" className="profile__avatar"></img>
        <p className="profile__username">Julian Blanca</p>
      </div>
      <div className="profile__items">
        <div className="profile__items-header">
          <p className="profile__items-title">Your items</p>
          <button onClick={handleCreateModal} className="profile__items-button">
            + Add new
          </button>
        </div>
        <div className="profile__clothing">
          {clothingItems.map((card) => {
            return (
              <ItemCard
                card={card}
                key={card._id}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Profile;
