import React, { useContext, useState } from "react";
import StorageContext from "../../context";
import { addItemToCart } from "../helpers/addCart";

export const useCartHook = (id) => {
  // control loading state hook
  const [loaded, setLoaded] = React.useState(false);
  const { toogleReadLocalStorage } = useContext(StorageContext);
  // control error state hook
  const [error, setError] = React.useState(null);

  const [setProduct, setProductState] = useState({
    id: id,
    colorCode: null,
    storageCode: null,
  });

  const choseOptionColor = (colorCode) => {
    setProductState({
      ...setProduct,
      colorCode: colorCode,
    });
  };

  const choseOptionStorage = (storageCode) => {
    setProductState({
      ...setProduct,
      storageCode: storageCode,
    });
  };
  // addProductToCart function
  const addProduct = (e) => {
    e.preventDefault();
    addItemToCart(setProduct).then((res) => {
      const productsAddedinCart = JSON.parse(
        localStorage.getItem("shoppingCartItems")
      );
      if (productsAddedinCart !== null) {
        const totalPorducts = productsAddedinCart + res.data.count;
        localStorage.setItem(
          "shoppingCartItems",
          JSON.stringify(totalPorducts)
        );
      } else {
        localStorage.setItem(
          "shoppingCartItems",
          JSON.stringify(res.data.count)
        );
      }
      toogleReadLocalStorage();
    });
  };

  // return the state hooks
  return {
    loaded,
    setLoaded,
    error,
    setError,
    setProduct,
    setProductState,
    choseOptionColor,
    choseOptionStorage,
    addProduct,
  };
};
