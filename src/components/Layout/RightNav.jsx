import Profile from './Profile';
import Cart from './Cart';
import { forwardRef } from 'react';

const RightNav = forwardRef(function (props, ref) {
  const logged = true;
  return (
    <div className='flex mx-3 md:mx-0 justify-center items-center gap-3'>
      <Cart
        ref={ref}
        isOpened={props.isOpened}
        setIsOpened={props.setIsOpened}
        showCart={props.showCart}
      />
      {logged ? (
        <Profile />
      ) : (
        <a
          href='/signin'
          className='bg-[#0176d3] text-white hover:bg-[#0174d3ee] py-2 px-2 md:px-8 rounded text-sm text-center font-bold shadow-md'
        >
          Sign In
        </a>
      )}
    </div>
  );
});

export default RightNav;
