import { baseUrl } from "./constants";
import { processServerResponse } from "./Api";

export function signUp(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
      avatar: data.avatar,
    }),
  }).then(processServerResponse);
}

export function signIn(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }).then(processServerResponse);
}

export function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
}
