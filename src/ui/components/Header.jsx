import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../..//assets/shopping-cart-icon.svg';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>
            {/* BreadCrums */}
           


       {/*Shopping cart*/}  
       <div className="shoppingcart">
            <img src={ShoppingCart} alt="shopping cart" width="30" height="30" />
       </div>
            
        </nav>
    )
}