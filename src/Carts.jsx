import React from 'react';

export default function Carts({ cart, removeFromCart }) {
  return (
    <>
      <h1>My Carts</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <div>
              <h3>{product.brandName}</h3>
              <h5>{product.typeName}</h5>
              <h6>Starting from {product.cost}</h6>
              <img src={product.image} alt={product.name} />
              <div>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
