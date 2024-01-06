import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({ handleClose }) {
  return (
    <ModalWithForm
      title={"Sign up"}
      name={"register"}
      buttonText={"Next"}
      onClose={handleClose}
    >
      <label className="modal__label" name="email" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        minLength="1"
        placeholder="Email"
        className="modal__input"
        required
      />
      <label className="modal__label" name="password" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        minLength="1"
        maxLength="15"
        placeholder="Password"
        className="modal__input"
        required
      />
      <label className="modal__label" name="name" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        minLength="1"
        maxLength="50"
        placeholder="Name"
        className="modal__input"
        required
      />
      <label className="modal__label" name="avatar" id="avatar">
        Avatar URL
      </label>
      <input
        type="url"
        name="avatar"
        id="avatar"
        minLength="1"
        maxLength="500"
        placeholder="Avatar URL"
        className="modal__input"
        required
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
