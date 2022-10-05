import React, { useEffect, useState } from 'react'
import { ProductItem } from '../../productItem/components/ProductItem';
import { getProducts } from '../helpers/getProducts'

export const HomePage = () => {


const [products, setProducts] = useState([]);

// real
let results;
const getAllProduct = async () => {
  const newProducts = await getProducts();
  setProducts(newProducts);
}

useEffect(() => {
  getAllProduct();
}, [])

// real time search
const [searchTerm, setSearchTerm] = useState("");
const [searchResult, setSearchResult] = useState([]);

const handleChange = event => {
  setSearchTerm(event.target.value);
};



useEffect(() => {
  const results = products.filter(product =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  setSearchResult(results);
}, [searchTerm]);

if(searchResult === undefined || searchResult.length == 0){
results = products;
} else {
results = searchResult;
}

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




