import "../blocks/ItemCard.css";
import heart from "../images/heart.svg";

function ItemCard({ i, onSelectCard }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">{i.name}</div>
        <img className="card__heart" src={heart} />
      </div>
      <img
        src={i.link}
        alt="clothing item"
        className="card__image"
        onClick={() => {
          onSelectCard(i);
        }}
      />
    </div>
  );
}

export default ItemCard;
