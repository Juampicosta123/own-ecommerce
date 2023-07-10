import { useState } from 'react';
import { useEffect } from 'react';
import './discount-products.css';

export function DiscountProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className='discount-wrapper'>
      <div className='discount-card'>
        {products.map((product) => (
          <div className='discount-product' key={product.id}>
            <div className='product-header'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='product-bottom'>
              <h5>{product.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
