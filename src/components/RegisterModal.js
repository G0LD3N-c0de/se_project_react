import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({ handleClose, registerUser, isLoading, redirect }) {
  const [email, setEmail] = useState("");
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const [avatar, setAvatar] = useState("");
  const handleSetAvatar = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  }

  return (
    <ModalWithForm
      title={"Sign up"}
      name={"register"}
      buttonText={isLoading ? "Saving..." : "Next"}
      onClose={handleClose}
      handleSubmit={handleSubmit}
      redirect={redirect}
      redirectText={"or Log In"}
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
        maxLength="15"
        placeholder="Password"
        className="modal__input"
        onChange={handleSetPassword}
        value={password}
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
        onChange={handleSetName}
        value={name}
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
        onChange={handleSetAvatar}
        value={avatar}
        required
      />
    </ModalWithForm>
  );
}

export default RegisterModal;
