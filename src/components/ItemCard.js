import "../blocks/ItemCard.css";
import heart from "../images/heart.svg";

function ItemCard({ card, cardId, onSelectCard, isLoggedIn }) {
  const likeButtonAuthorizationClassName = `card__heart ${
    isLoggedIn ? "card__heart_visible" : "card__heart_hidden"
  }`;
  return (
    <div className="card" key={cardId}>
      <div className="card__header">
        <p className="card__title">{card.name}</p>
        <img
          className={likeButtonAuthorizationClassName}
          src={heart}
          alt="like button"
        />
      </div>
      <img
        src={card.imageUrl}
        alt={card.name}
        className="card__image"
        onClick={() => {
          onSelectCard(card);
        }}
      />
    </div>
  );
}

export default ItemCard;
