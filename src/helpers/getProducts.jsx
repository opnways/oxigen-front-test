import axios from "axios";

export async function getProducts() {
  const { VITE_SERVER_API } = import.meta.env;
  // check if the products are already in local storage
  const productsCache = localStorage.getItem("products");

  if (productsCache) {
    const dateCache = localStorage.getItem("date");
    if (dateCache > new Date().getTime() - 1000 * 60 * 60) {
      const products = JSON.parse(productsCache);
      return products;
    } else {
      localStorage.removeItem("products");
      localStorage.removeItem("date");
    }
  }

  // if not, fetch them from the server

  const data = await axios.get(`${VITE_SERVER_API}api/product`);

  const products = data.data;

  // save them in local storage
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("date", new Date().getTime());

  return products;
}
