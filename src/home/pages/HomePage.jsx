import React, { useEffect, useState } from 'react'
import { ProductItem } from '../../productItem/components/ProductItem';

import { getProducts } from '../helpers/getProducts'

export const HomePage = () => {


const [products, setProducts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchResult, setSearchResult] = useState([]);

//load products 
let results;
let productsJSON;
const getAllProduct = async () => {
  const newProducts = await getProducts();
  setProducts(newProducts);
}
const clearInput = () => {
  const input = document.querySelector('input');
  input.value = '';

  }
useEffect(() => {
  getAllProduct();
  clearInput();
  
}, [productsJSON])
// real time search


const handleChange = event => {
  setSearchTerm(event.target.value);
};

if(typeof products === 'string' ) {
  // convert to json
productsJSON = JSON.parse(products);
} else {
  // already json
 productsJSON = products;
}

searchTerm.length > 0 ? results = productsJSON.filter(product => product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())) : results = productsJSON;

return (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <h1>Home</h1>
       
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />

        
       
      </div>
    </div>
    <div className='row'>






      {results.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  </div>
)
}
