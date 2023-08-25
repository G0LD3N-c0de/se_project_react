import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ isOpen, onAddItem, handleClose }) {
  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const [imageUrl, setImageUrl] = useState("");
  const handleSetImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  const [weather, setWeather] = useState("");
  const handleSetWeather = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  }

  return (
    <ModalWithForm
      title={"New Garment"}
      name={"create"}
      buttonText={"Add Garment"}
      onClose={handleClose}
      handleSubmit={handleSubmit}
    >
      <label className="modal__label" name="name" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        minLength="1"
        maxLength="30"
        placeholder="Name"
        className="modal__input"
        onChange={handleSetName}
        required
      />
      <label className="modal__label" htmlFor="link">
        Image
      </label>
      <input
        type="url"
        name="imageUrl"
        id="link"
        minLength="1"
        placeholder="Image URL"
        className="modal__input"
        onChange={handleSetImageUrl}
        required
      />
      <p>Select the weather type:</p>
      <div className="modal__radio-buttons">
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weatherType"
            value="Hot"
            id="Hot"
            onChange={handleSetWeather}
            required
          ></input>
          <label htmlFor="Hot" className="modal__radio-label">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weatherType"
            value="Warm"
            id="Warm"
            onChange={handleSetWeather}
            required
          ></input>
          <label htmlFor="Warm" className="modal__radio-label">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            name="weatherType"
            value="Cold"
            id="Cold"
            onChange={handleSetWeather}
            required
          ></input>
          <label htmlFor="Cold" className="modal__radio-label">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;
