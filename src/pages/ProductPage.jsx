import React, { useContext, useEffect, useState, } from "react";
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
    const {
      imgUrl,
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
      options,
    } = productData;
    const colors = [];
    const storages = [];
    function colorsOptions(colorName, colorCode) {
      console.log(colorName);
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
      <div>
        <div >
          <div >
            <div>
              <img  src={imgUrl} alt="product image" />
            </div>
          </div>
          <div >
            <div>
              <h1>PRODUCT DETAILS</h1>
              <div >
                <div>{`Marca: ${brand}`}</div>
                <div>{`Modelo: ${model}`}</div>
                <div>{`Precio: ${price}`}</div>
                <div>{`CPU: ${cpu}`}</div>
                <div>{`RAM: ${ram}`}</div>
                <div>{`OS: ${os}`}</div>
                <div>{`Resolution: ${displayResolution}`}</div>
                <div>{`Battery: ${battery}`}</div>
                <div>{`Dimentions: ${dimentions}`}</div>
                <div>{`Weight: ${weight}`}</div>
              </div>
            </div>
            <div>
              <form  onSubmit={addProduct}>
                <h1>SELECT:</h1>
                <h3>colors</h3>
               
                <Select
                
                  onChange={choseOptionColor}
                  options={colors}
                />
                <h3>storage</h3>
                <Select
                 
                  onChange={choseOptionStorage}
                  options={storages}
                />

                <button type="submit">add product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}
