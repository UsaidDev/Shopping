import React from 'react';
import './Home.css';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="home-heading">
        <h1 className='title'>Apple Shop</h1>
      </div>
      <div className="container">
        <div className="row mt-4">
          {Products.map((e, index) => (
            <div className='col-12 col-md-12 col-lg-4 mb-4' key={e.id}>
              <div className="card mt-3 mx-auto">
                <img className="card-img-top" src={e.image} alt="Card image cap" />
                <div className="card-body text-center">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text description">{e.description}</p>
                  <p className='card-text price'>₹{e.price}</p>
                 
                  <Link to={`/cart/product/${e.id}`} className='btn btn-primary' >
                    Product Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
