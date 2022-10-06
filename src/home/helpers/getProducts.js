import.meta.env.SERVER_API;

export async function getProducts() {
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

  const resp = await axios({
    method: "GET",
    url: `${SERVER_API}api/product`,
  });
  const data = await resp.json();
  const products = data.map((product) => ({
    ...product,
    img: product.imgUrl,
  }));
  // save them in local storage
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("date", new Date().getTime());
  return products;
}
