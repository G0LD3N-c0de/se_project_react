import "../blocks/ItemCard.css";

function ItemCard({ i }) {
  return (
    <div className="card">
      <div className="card__title">{i.name}</div>
      <img src={i.link} alt="clothing item" className="card__image" />
    </div>
  );
}

export default ItemCard;
