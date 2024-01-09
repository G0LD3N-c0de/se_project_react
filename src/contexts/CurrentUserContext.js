import { createContext } from "react";

const CurrentUserContext = createContext({
  _id: "",
  name: "",
  avatar: "",
  email: "",
});

export default CurrentUserContext;
