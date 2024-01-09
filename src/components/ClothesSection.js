import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({ onSelectCard, clothingItems }) {
  const currentUser = useContext(CurrentUserContext);
  // Filter for cards that current user created and only display those
  const ownersCards = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });
  const recentClothingItems = [...ownersCards].reverse();

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
