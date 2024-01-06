import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function LoginModal({ handleClose }) {
  return (
    <ModalWithForm
      title={"Log in"}
      name={"login"}
      buttonText={"Log in"}
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
        maxLength="100"
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
        maxLength="20"
        placeholder="Password"
        className="modal__input"
        required
      />
    </ModalWithForm>
  );
}

export default LoginModal;
