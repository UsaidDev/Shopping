import React, { useState } from 'react';
import './Cart.css';
import Cartdata from '../Cartdata/Cartdata';

function Cart() {
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseValue = (id, price) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const decreaseValue = (id, price) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
      setTotalPrice((prevTotal) => prevTotal - price);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {Cartdata.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3">
              <div className="Cart justify-content-center mx-auto">
                <div className="cart-products mx-auto">
                  <img src={product.image} alt="" className="cart-image" />
                  <h5>{product.title}</h5>
                  <h5>{product.description}</h5>
                  <h6>Quantity: {quantities[product.id] || 0}</h6>
                  <h6>Price: {product.price * (quantities[product.id] || 0)}</h6>
                  <button
                    className="btn btn-primary"
                    onClick={() => increaseValue(product.id, product.price)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => decreaseValue(product.id, product.price)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
