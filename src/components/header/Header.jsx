import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import StorageContext from "../../../context";
import ShoppingCart from "../../assets/shopping-cart-icon.svg";
import Logo from "../../assets/logo.svg";
export const Header = () => {
  //clear input field if user goes back to home page

  const [cartItemsStorage, setCarItemsStorage] = useState(null);
  const { readLocalStorage } = useContext(StorageContext);

  // breadcrumb
  const location = useLocation();
  const path = location.pathname;
  const pathArray = path.split("/");
  const pathArrayLength = pathArray.length;
  const pathArrayLast = pathArray[pathArrayLength - 2];

  if (pathArrayLast === "product") {
  }
  useEffect(() => {
    setCarItemsStorage(JSON.parse(localStorage.getItem("shoppingCartItems")));
  }, [readLocalStorage]);
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-light bg-light header">
        <NavLink className="navbar-brand leader__logo" to="/">
          <img src={Logo} alt="logo" className="logo" />
        </NavLink>
        <div className="breadcrumbs">
          {pathArrayLast === "product" ? (
            <>
              <NavLink to="/">Home</NavLink> <span> {" >"} Product</span>
            </>
          ) : (
            <span>Home</span>
          )}
        </div>
        {/*Shopping cart*/}
        <div className="shopping-cart">
          {cartItemsStorage === null ? 0 : cartItemsStorage}
          <img src={ShoppingCart} alt="shopping cart" width="30" height="30" />
        </div>
      </nav>
    </div>
  );
};
