import "../blocks/ItemModal.css";

function ItemModal({ selectedCard, onClose }) {
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
        <p className="item-modal__title">{selectedCard.name}</p>
        <div className="item-modal__weather">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
