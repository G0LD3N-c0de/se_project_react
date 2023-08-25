const baseUrl = "http://localhost:3001";

export function getClothingItems() {
  fetch(`${baseUrl}/items`);
}
