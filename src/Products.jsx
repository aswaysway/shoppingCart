import React, { useState } from "react";

export default function Products({ addToCart }) {
  // DATA
  const [products] = useState([
    {
      brandName: "Volkswagen",
      typeName: "2021 Altas Cross Sport",
      cost: "$30,855",
      image:
        "https://images.dealer.com/ddc/vehicles/2021/Volkswagen/Atlas%20Cross%20Sport/SUV/trim_20T_S_96ab5d/color/Pure%20White-0Q0Q-233%2C234%2C229-640-en_US.jpg?impolicy=resize&w=640",
    },
    {
      brandName: "Land Rover",
      typeName: "2021 Range Rover Sport",
      cost: "$82,200",
      image:
        "https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/02/chrome-image-416741.png",
    },
    {
      brandName: "Mercedes-Benz",
      typeName: "2021 GLA 250 Incentives",
      cost: "$37,280",
      image:
        "https://images.dealer.com/ddc/vehicles/2021/Mercedes-Benz/GLA%20250/SUV/trim_Base_6c35e2/perspective/front-left/2021_24.png",
    },
    {
      brandName: "Audi",
      typeName: "2021 Q5 45 Premium",
      cost: "$46,965",
      image:
        "https://pictures.dealer.com/aoa-images/1a5d640201a7a58299a4c82e2691497a.png",
    },
  ]);

  // RENDER
  return (
    <>
      <h1>New Arrival</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <div>
              <h3>{product.brandName}</h3>
              <h5>{product.typeName}</h5>
              <h6>Starting from {product.cost}</h6>
              <img src={product.image} alt={product.name} />
              <div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
