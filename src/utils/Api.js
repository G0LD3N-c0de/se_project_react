const baseUrl =
  "https://my-json-server.typicode.com/G0LD3N-c0de/se_project_react";

export function getClothingItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
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
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}

export function deleteClothingItem(cardId) {
  return fetch(`${baseUrl}/items/` + cardId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
}
