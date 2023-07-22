import "../blocks/ItemCard.css";
import heart from "../images/heart.svg";

function ItemCard({ card, onSelectCard }) {
  return (
    <div className="card">
      <div className="card__header">
        <p className="card__title">{card.name}</p>
        <img className="card__heart" src={heart} alt="like button" />
      </div>
      <img
        src={card.link}
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
