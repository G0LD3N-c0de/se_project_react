import "../blocks/ItemCard.css";

function ItemCard({ i, onSelectCard }) {
  return (
    <div className="card" key={i._id}>
      <div className="card__title">{i.name}</div>
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
