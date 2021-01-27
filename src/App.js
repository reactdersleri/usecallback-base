import React, { useState } from "react";
import "./App.css";

const phones = [
  { name: "iPhone 12", price: 14000 },
  { name: "Galaxy S20", price: 6500 },
  { name: "Huawei P40", price: 10000 },
];

const App = () => {
  const [products] = useState(phones);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="wrapper">
      <Products products={products} addToCart={addToCart} />
      <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  );
};

const Products = ({ products, addToCart }) => {
  return (
    <>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({ name, price }) => (
          <Product key={name} name={name} price={price} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

const Cart = ({ cart, emptyCart }) => {
  return (
    <>
      <h1>
        Sepetiniz <button onClick={emptyCart}>sepeti boşalt</button>
      </h1>
      <div className="products">
        {cart.map(({ name, price }, index) => (
          <Product key={index} name={name} price={price} />
        ))}
      </div>
    </>
  );
};

const Product = ({ name, price, addToCart }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <h3>{price.toLocaleString()} ₺</h3>
      {addToCart && (
        <button onClick={() => addToCart({ name, price })}>Sepete Ekle</button>
      )}
    </div>
  );
};

export default App;
