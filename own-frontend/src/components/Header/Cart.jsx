import { forwardRef } from 'react';
import './cart.css';

const products = [
  {
    id: 1,
    title: 'Iphone X',
    quantity: 2,
    price: 300
  },
  {
    id: 2,
    title: 'Iphone 8',
    quantity: 1,
    price: 200
  }
];

const Cart = forwardRef(function (props, ref) {
  return (
    <div
      className={`hide-cart ${
        props.mobile ? 'mobile-cart-container ' : 'cart-container'
      }`}
      ref={ref}
    >
      <h5>Products Added</h5>
      <div className='products'>
        <table className='products-table'>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Cart;
