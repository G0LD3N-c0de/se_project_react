import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  name,
  onClose,
  title,
  handleSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close" />
        <div className="modal__title">{title}</div>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__children">{children}</div>
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
