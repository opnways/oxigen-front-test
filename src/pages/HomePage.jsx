import React, { useEffect, useState } from "react";
import { ProductItem } from "../components/productItem/ProductItem";
import SearchInput from "../components/searchInput/SearchInput";
import { getProducts } from "../helpers/getProducts";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //load products
  let results = [];
  const getAllProduct = async () => {
    const newProducts = await getProducts();
    setProducts(newProducts);
  };
  // clear search input
  const clearInput = () => {
    const input = document.querySelector("input");
    input.value = "";
  };
  useEffect(() => {
    getAllProduct();
    clearInput();
  }, []);

  // real time search
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // copare search term with product name
  searchTerm.length > 0
    ? (results = products.filter(
        (product) =>
          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.model.toLowerCase().includes(searchTerm.toLowerCase()),
      ))
    : (results = products);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Home</h1>
          <SearchInput
            type="text"
            label="Search a product"
            value={searchTerm}
            placeholder="By model or by brand"
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        {results.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
