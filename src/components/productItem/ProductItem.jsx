import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = (product) => {
  const { id, imgUrl, brand, model, price } = product;

  return (
    <div className="col-6  col-sm-6 col-md-3 product">
      <Link to={`/product/${id}`}>
        <div className="card">
          <img src={imgUrl} alt={brand + model} />
          <div className="info-card">
            <div className="text-card">
              <h3>{brand}</h3>
              <h4>{model}</h4>
            </div>
            <div className="price-card">{price}€</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
