import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Products from '../Products/Products';
import './ProductDetails.css'
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = Products.find((p) => p.id === parseInt(id, 10));

    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>No product found for the given id.</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mx-auto">
          <div className="col-12 col-md-6 col-lg-12">
            <div className="product-details">
              <img src={product.image} alt={product.title} className='product-image' />
              <div className="product-titles">
              <h1 className='product-title'>{product.title}</h1>
              <p className='product-description'>{product.description}</p>
              <p className='price'>₹{product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
