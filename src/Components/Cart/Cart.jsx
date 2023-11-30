import React, { useState } from 'react';
import Cartdata from '../Cartdata/Cartdata';

function Cart() {
  const [quantities, setQuantities] = useState({});

  const increaseValue = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };
  const decreaseValue = (id) => {
    if (quantities[id] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
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
                  <img src={product.image} alt="Imageleading" className="cart-image" />
                  <h5>{product.title}</h5>
                  <h5>{product.description}</h5>
                  <h6>Quantity: {quantities[product.id] || 0}</h6>
                  {/*Sample Methods Extra added*/}
                  <button
                    className="btn btn-primary"
                    onClick={() => increaseValue(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => decreaseValue(product.id)}
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
