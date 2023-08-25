import "../blocks/ItemModal.css";

function ItemModal({ selectedCard, onClose, handleDeleteItem }) {
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
          src={selectedCard.link}
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
              className="item-modal__delete-item"
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
