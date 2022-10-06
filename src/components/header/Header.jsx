import {  useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StorageContext from '../../../context';
import ShoppingCart from '../../assets/shopping-cart-icon.svg';

export const Header = () => {
    //clear input field if user goes back to home page
  
    const [cartItemsStorage, setCarItemsStorage] = useState(null);
    const { readLocalStorage } = useContext(StorageContext);


    useEffect(() => {
        setCarItemsStorage(JSON.parse(localStorage.getItem("shoppingCartItems")));
      }, [readLocalStorage]);


    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink 
                    className="navbar-brand" 
                    to="/"
                >
                    Home
                </NavLink>
        
            

            
            
            {/*Shopping cart*/}  
            <div className="shoppingcart">
                {cartItemsStorage === null ? 0 : cartItemsStorage}<img src={ShoppingCart} alt="shopping cart" width="30" height="30" />
            </div> 
        </nav>
    )
}