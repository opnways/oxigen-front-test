import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = (product) => {
  const { id, imgUrl, brand, model, price } = product;

  return (
    <div className="col-sm-3">
      <Link to={`/product/${id}`}>
        <img src={imgUrl} alt={brand + model} />
        <h3>{brand}</h3>
        <h4>{model}</h4>
        <p>{price}€</p>
      </Link>
    </div>
  );
};
