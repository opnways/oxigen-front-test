import axios from "axios";

const { VITE_SERVER_API } = import.meta.env;

export async function getIndividualProduct(id) {
  // check if the product are already in local storage
  const productCache = localStorage.getItem(id);

  if (productCache) {
    const dateCache = localStorage.getItem("date");
    if (dateCache > new Date().getTime() - 1000 * 60 * 60) {
      const products = JSON.parse(productCache);
      return products;
    } else {
      localStorage.removeItem(id);
      localStorage.removeItem("date");
    }
  }
  const product = await axios({
    method: "GET",
    url: `${VITE_SERVER_API}api/product/${id}`,
  });
  // save them in local storage
  localStorage.setItem(id, JSON.stringify(product));
  localStorage.setItem("date", new Date().getTime());
  return product;
}
