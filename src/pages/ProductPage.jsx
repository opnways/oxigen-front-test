import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

import StorageContext from "../../context";
import { addItemToCart } from "../helpers/addCart";
import { getIndividualProduct } from "../helpers/getProduct";
export const ProductPage = () => {
  const { id } = useParams();
  const { toogleReadLocalStorage } = useContext(StorageContext);
  const [productData, setProductData] = useState();
  const [loaded, setLoaded] = useState(false);

  const [setProduct, setProductState] = useState({
    id: id,
    colorCode: null,
    storageCode: null,
  });

  function addProduct(e) {
    e.preventDefault();

    addItemToCart(setProduct).then((res) => {
      const productsAddedinCart = JSON.parse(localStorage.getItem("shoppingCartItems"));
      if (productsAddedinCart !== null) {
        const totalPorducts = productsAddedinCart + res.data.count;
        localStorage.setItem("shoppingCartItems", JSON.stringify(totalPorducts));
      } else {
        localStorage.setItem("shoppingCartItems", JSON.stringify(res.data.count));
      }
      toogleReadLocalStorage();
    });
  }
  useEffect(() => {
    getIndividualProduct(id).then((res) => {
      const { data } = res;

      setProductData(data);
      setLoaded(true);
    });
  }, [id]);
  function choseOptionColor(e) {
    setProductState({
      ...setProduct,
      colorCode: e.value,
    });
  }

  function choseOptionStorage(e) {
    setProductState({
      ...setProduct,
      storageCode: e.value,
    });
  }

  if (loaded) {
    const { imgUrl, brand, model, price, cpu, ram, os, displayResolution, battery, dimentions, weight, options } =
      productData;
    const colors = [];
    const storages = [];
    function colorsOptions(colorName, colorCode) {
      colors.push({ value: colorCode, label: colorName });
    }
    function storageOptions(storageName, storageCode) {
      storages.push({ value: storageCode, label: storageName });
    }
    options.colors.forEach((color) => {
      const { name, code } = color;

      colorsOptions(name, code);
    });
    options.storages.forEach((storage) => {
      const { name, code } = storage;

      storageOptions(name, code);
    });

    return (
      <div className="container individual-product">
        <div className="row">
          <div className="col-sm-6">
            <div className="full-image-product">
              <img src={imgUrl} alt="{brand} {model}" />
            </div>
          </div>
          <div className="col-md-6">
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
            <div>
              <form onSubmit={addProduct}>
                <h1>SELECT:</h1>
                <h3>colors</h3>

                <Select onChange={choseOptionColor} options={colors} />
                <h3>storage</h3>
                <Select onChange={choseOptionStorage} options={storages} />

                <button className="btn btn-btn btn-secondary submit" type="submit">
                  add product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};
