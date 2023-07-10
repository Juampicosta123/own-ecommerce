import { forwardRef, useEffect, useState } from 'react';
import CloseIcon from '../../icons/CloseIcon';
import { Link } from 'wouter';

const CartMenu = forwardRef(function (props, ref) {
  const [cartProducts, setCartProducts] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem('cart')));
  }, [localStorage.getItem('cart'), deleted]);

  function closeMenu() {
    ref?.current?.classList?.toggle('right-[-600px]');
    ref?.current?.classList?.toggle('right-0');
    props?.setIsOpened(!props.isOpened);
  }

  function updateQuantity({ product }, value) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let cartProduct of cart) {
      if (cartProduct.id === product.id) {
        cartProduct.quantity = value;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function removeCartProduct({ product }) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (let cartProduct of cart) {
      if (cartProduct.id === product.id)
        cart = cart.filter((productCart) => productCart.id != product.id);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setDeleted(!deleted);
  }

  return (
    <div
      ref={ref}
      className='absolute top-0 h-screen w-screen md:w-80 bg-white z-10 right-[-600px] transition-right duration-300 flex flex-col align-center p-3 text-[#032d60] overflow-y-auto border shadow-xl'
    >
      <CloseIcon closeMenu={closeMenu} />
      <h5 className='text-lg font-bold text-center'>My Cart</h5>
      <div className='products mt-3 flex flex-col justify-center items-center'>
        {cartProducts && cartProducts.length !== 0 ? (
          cartProducts?.map((product) => (
            <>
              <div
                key={product.id}
                className='relative product flex gap-3 '
                href='/product/1'
              >
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.img}
                    alt={`${product.title} photo`}
                    className='w-[90px] object-contain h-auto cursor-pointer'
                  />
                </Link>
                <div className='flex flex-col align-center text-center gap-2 p-3'>
                  <Link href={`/product/${product.id}`}>
                    <h6 className='text-sm cursor-pointer hover:underline '>
                      {product.title}
                    </h6>
                  </Link>
                  <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex gap-2 items-center justify-center text-sm'>
                      <p className='text-gray-400 line-through'>
                        ${product.oldPrice}
                      </p>
                      <p className='bg-red-600 text-white rounded p-1 font-semibold'>
                        50% OFF
                      </p>
                    </div>
                    <p className='font-semibold text-md'>${product.newPrice}</p>
                  </div>
                  <div className='flex gap-2 items-center justify-center'>
                    <input
                      onChange={(e) =>
                        updateQuantity({ product }, e.target.value)
                      }
                      type='number'
                      defaultValue={product.quantity}
                      className='w-8'
                      min='1'
                      max='10'
                    />
                    <button>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 16 16'
                        className='w-4'
                        onClick={() => removeCartProduct({ product })}
                      >
                        <path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z' />
                        <path
                          fillRule='evenodd'
                          d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <button className='bg-[#0176d3] p-2 mt-5 rounded text-white hover:bg-[#0174d3ee]'>
                Buy Products
              </button>
            </>
          ))
        ) : (
          <p className='font-semibold mt-5'>
            There are no products in your cart
          </p>
        )}
      </div>
    </div>
  );
});

export default CartMenu;
