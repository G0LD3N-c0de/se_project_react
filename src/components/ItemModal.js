function ItemModal({ selectedCard, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close" />
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>{selectedCard.weather}</div>
      </div>
    </div>
  );
}

export default ItemModal;
