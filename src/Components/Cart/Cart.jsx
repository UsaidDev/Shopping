import React from 'react'
import './Cart.css'
import Products from '../Products/Products'
function Cart() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {
            Products.map((e) => (
              <div className="col-12 col-md-6 col-lg-6">
                <div className="Cart">
                  <img src={e.image} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
