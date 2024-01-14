import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function LoginModal({ handleClose, signInUser }) {
  const [email, setEmail] = useState("");
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    signInUser({ email, password });
  }

  return (
    <ModalWithForm
      title={"Log in"}
      name={"login"}
      buttonText={"Log in"}
      onClose={handleClose}
      handleSubmit={handleSubmit}
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
        onChange={handleSetEmail}
        value={email}
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
        onChange={handleSetPassword}
        value={password}
        required
      />
    </ModalWithForm>
  );
}

export default LoginModal;
