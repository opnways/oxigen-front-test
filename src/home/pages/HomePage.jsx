import React, { useEffect, useState } from 'react'
import { ProductItem } from '../../productItem/components/ProductItem';
import { getProducts } from '../helpers/getProducts'

export const HomePage = () => {


const [products, setProducts] = useState([]);

const getAllProduct = async () => {
  const newProducts = await getProducts();
  setProducts(newProducts);
}
useEffect(() => {
    getAllProduct()
}, [])

  return (
    <>
    <div className='container'>
    <div className='row'>
      {products.map((product) => (
      
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
    </div>
    </>
  )
}
