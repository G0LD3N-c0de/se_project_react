import { useContext } from "react";
import "../blocks/ItemModal.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemModal({ selectedCard, onClose, handleDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn =
    selectedCard.owner === currentUser._id || "65eca0f3ab3160c783991aab";
  const itemDeleteButtonClassName = `item-modal__delete-button ${
    isOwn
      ? "item-modal__delete-button_visible"
      : "item-modal__delete-button_hidden"
  }`;

  return (
    <div className="modal">
      <div className="modal__content modal__preview-content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close modal__item-close"
        />
        <img
          className="item-modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="item-modal__description">
          <div className="item-modal__description-left">
            <p className="item-modal__title">{selectedCard.name}</p>
            <div className="item-modal__weather">
              Weather: {selectedCard.weather}
            </div>
          </div>
          <div className="item-modal__description-right">
            <button
              onClick={handleDeleteItem}
              type="button"
              className={itemDeleteButtonClassName}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

// onClick on delete-item, remove selected card from
