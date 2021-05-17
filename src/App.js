import React, { useState } from "react";
import "./App.css";
import Products from "./Products";
import Carts from "./Carts";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  // FUNCTIONS
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  // RENDER
  return (
    <div className="App">
      <header>
        <div className="header__container">
          <div className="logo">DreamCar</div>
          <div className="btn">
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
              View Products
            </button>
            <button onClick={() => navigateTo(PAGE_CART)}>
              Cart ({cart.length})
            </button>
          </div>
        </div>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Carts cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
