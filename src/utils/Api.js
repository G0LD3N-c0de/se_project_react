import { baseUrl } from "./constants";

export function getClothingItems() {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
}

export function addClothingItem(data) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      weather: data.weather,
      imageUrl: data.imageUrl,
    }),
  }).then(processServerResponse);
}

export function deleteClothingItem(cardId) {
  return fetch(`${baseUrl}/items/` + cardId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then(processServerResponse);
}

export function processServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
