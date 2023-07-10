import React, { forwardRef, useRef } from 'react';
import IconCartShopping from '../../icons/IconCartShopping';
import CartMenu from './CartMenu';

const Cart = forwardRef(function (props, ref) {
  return (
    <>
      <IconCartShopping showCart={props.showCart} />
      <CartMenu setIsOpened={props.setIsOpened} ref={ref} isOpened={props.isOpened}/>
    </>
  );
});
export default Cart;
