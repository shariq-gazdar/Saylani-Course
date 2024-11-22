import React, { useState, useEffect } from "react";
import Notify from "./Notify";
function Cards(props) {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    let products = [
      {
        name: "Lipstick",
        description: "Pink Lipstick",
        price: "1600",
      },
      {
        name: "Foundation",
        description: "Full-coverage foundation",
        price: "2500",
      },
      {
        name: "Mascara",
        description: "Waterproof mascara",
        price: "1200",
      },
      {
        name: "Eyeshadow Palette",
        description: "12-color matte palette",
        price: "3000",
      },
      {
        name: "Blush",
        description: "Peach blush",
        price: "1400",
      },
    ];
    setProd(products);
  }, []);

  const cartUpdating = () => {
    props.setCart(props.cart + 1);
    console.log(props.cart);
  };
  return (
    <>
      <Notify />
      <div className="flex justify-center m-10 gap-5 ">
        {prod.map((product, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg flex flex-col gap-y-3 items-center"
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button
              className="bg-orange-500 p-1 rounded-lg text-white w-fit"
              onClick={cartUpdating}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
