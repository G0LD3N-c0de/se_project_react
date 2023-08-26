import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

function ClothesSection({ onSelectCard, clothingItems }) {
  const recentClothingItems = [...clothingItems].reverse();
  return (
    <div className="clothes-section">
      {recentClothingItems.map((card) => {
        return (
          <ItemCard card={card} key={card._id} onSelectCard={onSelectCard} />
        );
      })}
    </div>
  );
}

export default ClothesSection;
