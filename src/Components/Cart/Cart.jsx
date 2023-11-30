import React, { useState } from 'react';
import Cartdata from '../Cartdata/Cartdata';
import './Cart.css'
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
        <div className="row mt-4">
          {Cartdata.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <div className="Cart mx-auto">
                <div className="cart-body">
                  <img src={product.image} alt="CartImage" className='cartproduct-image' />
                  <h5 className='cartproduct-title'>{product.title}</h5>
                  <p className='cartproduct-description'>{product.description}</p>
                  <h5 className='cartproduct-price'>₹{product.price}</h5>
                  <h6 className='cartproduct-quantity'>Quantity: {quantities[product.id] || 0}</h6>
                  <div className="cart-btn">
                  <button
                    className="text-center btn btn-primary cartproduct-btn"
                    onClick={() => increaseValue(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-primary text-center "
                    onClick={() => decreaseValue(product.id)}
                  >
                    -
                  </button>
                  </div>
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
