import React, { useState } from "react";

export const useCartHook = (id) => {
  // control loading state hook
  const [loaded, setLoaded] = React.useState(false);

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
  };
};
