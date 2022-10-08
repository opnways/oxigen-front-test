import React from "react";

export function ProductDescription(productData) {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    dimentions,
    weight,
  } = productData.data;
  return (
    <div>
      <h1>PRODUCT DETAILS</h1>

      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Marca</th>
            <td>{brand}</td>
          </tr>
          <tr>
            <th scope="row">Modelo</th>
            <td>{model}</td>
          </tr>
          <tr>
            <th scope="row">Precio</th>
            <td>{price}</td>
          </tr>
          <tr>
            <th scope="row">CPU</th>
            <td>{cpu}</td>
          </tr>
          <tr>
            <th scope="row">RAM</th>
            <td>{ram}</td>
          </tr>
          <tr>
            <th scope="row">OS</th>
            <td>{os}</td>
          </tr>
          <tr>
            <th scope="row">Resolución</th>
            <td>{displayResolution}</td>
          </tr>
          <tr>
            <th scope="row">Batería</th>
            <td>{battery}</td>
          </tr>
          <tr>
            <th scope="row">Dimensiones</th>
            <td>{dimentions}</td>
          </tr>
          <tr>
            <th scope="row">Peso</th>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
