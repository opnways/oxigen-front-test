import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

import StorageContext from "../../context";
import { ImageProduct } from "../components/imageProduct/ImageProduct";
import { ProductDescription } from "../components/producDescription/ProductDescription";
import { addItemToCart } from "../helpers/addCart";
import { getIndividualProduct } from "../helpers/getProduct";
import { useCartHook } from "../hooks/useCartHook";
export const ProductPage = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState();
  const {
    loaded,
    setLoaded,
    error,
    setError,
    setProduct,
    setProductState,
    choseOptionColor,
    choseOptionStorage,
    addProduct,
  } = useCartHook(id);

  useEffect(() => {
    getIndividualProduct(id)
      .then((res, err) => {
        const { data } = res;
        setProductData(data);
        setLoaded(true);
      })
      .catch((err) => {
        // if error show error page
        setError(true);
      });
  }, [id]);

  if (error) {
    return <div>Product not Exists</div>;
  }
  if (loaded) {
    const { imgUrl, brand, model, options } = productData;
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
              <ImageProduct imageData={imgUrl} altImage={brand + model} />
            </div>
          </div>
          <div className="col-md-6">
            <ProductDescription data={productData} />
            <div>
              <form onSubmit={addProduct}>
                <h1>SELECT:</h1>
                <h3>colors</h3>

                <Select onChange={choseOptionColor} options={colors} />
                <h3>storage</h3>
                <Select onChange={choseOptionStorage} options={storages} />

                <button
                  className="btn btn-btn btn-secondary submit"
                  type="submit"
                >
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
