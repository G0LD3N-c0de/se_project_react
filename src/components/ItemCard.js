import "../blocks/ItemCard.css";
import heart from "../images/heart.svg";
import activeHeart from "../images/heart-active.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemCard({ card, onSelectCard, isLoggedIn, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const likeButtonAuthorizationClassName = `card__heart ${
    isLoggedIn ? "card__heart_visible" : "card__heart_hidden"
  }`;

  const isLiked = card.likes.some((id) => id === currentUser._id);

  const onCardLike = () => {
    handleCardLike({ id: card._id, isLiked: isLiked });
  };

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__title">{card.name}</p>
        <img
          className={likeButtonAuthorizationClassName}
          src={isLiked ? activeHeart : heart}
          alt="like button"
          onClick={onCardLike}
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
