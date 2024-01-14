import { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function EditProfileModal({ handleClose, editProfile }) {
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
    editProfile({ name, avatar });
  }

  return (
    <ModalWithForm
      title={"Change profile data"}
      name={"editProfile"}
      buttonText={"Save changes"}
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
        value={name}
        required
      />
      <label className="modal__label" name="avatar" htmlFor="avatar">
        Avatar URL
      </label>
      <input
        type="url"
        name="avatar"
        id="avatar"
        minLength="1"
        placeholder="Avatar URL"
        className="modal__input"
        onChange={handleSetAvatar}
        value={avatar}
        required
      />
    </ModalWithForm>
  );
}

export default EditProfileModal;
