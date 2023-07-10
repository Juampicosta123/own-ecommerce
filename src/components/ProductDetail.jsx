import { useState } from 'react';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const sixInterestOf = (product.newPrice / 6).toFixed(2);
  const twelveInterestOf = (product.newPrice / 12 ).toFixed(2);
  const shipping = product.newPrice * 0.03

  function addProductToCart() {
    product.quantity = quantity;
    let cart = [];
    if (!localStorage.getItem('cart')) {
      cart.push(product);
      return localStorage.setItem('cart', JSON.stringify(cart));
    }

    const oldCart = localStorage.getItem('cart');
    localStorage.removeItem('cart');

    cart.push(JSON.parse(oldCart));
    cart = cart.flat(1);

    for (let cartProduct of cart) {
      if (cartProduct.id === product.id) {
        const cartQuantity = Number(cartProduct.quantity);
        const productQuantity = Number(product.quantity);
        cartProduct.quantity = productQuantity + cartQuantity;
        return localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <div>
      <div className='grid gap-2 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 p-5 justify-center items-center lg:px-[470px]'>
        <img
          src={product.img}
          alt={`${product.title} photo`}
          className='md:border lg:border rounded p-3 md:w-[450px] w-[300px] lg:w-[465px] md:h-[465px] object-contain'
        />
        <div className='flex flex-col md:border lg:border rounded w-[300px] md:w-[450px] md:h-[465px] lg:w-[465px]'>
          <div className='flex flex-col border-b-2 p-5 gap-3 md:px-10 lg:px-10'>
            <h4 className='font-bold text-xl'>{product.title}</h4>
            <p className='text-xl'>${product.newPrice}</p>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Our Promotions:</p>

              <div className='flex gap-2 flex-col'>
                <p className='text-green-700 mt-1 text-sm'>
                  <span className='font-semibold'>6 interest-free</span>{' '}
                  installments of ${sixInterestOf}
                </p>
                <div className='flex gap-2'>
                  <img
                    src='https://images.fravega.com/f300/54c0d769ece1b00f739360d6c900e4f9.png.webp'
                    width='46'
                    height='auto'
                    loading='lazy'
                    alt='Opción de pago'
                    className='object-contain'
                  />

                  <img
                    src='https://images.fravega.com/f300/11509c3fdfabb96a8fe2c3692726597b.png.webp'
                    width='46'
                    height='auto'
                    loading='lazy'
                    alt='Opción de pago'
                    className='object-contain'
                  />
                  <img
                    src='https://images.fravega.com/f300/5e3b1f271aff1e0b6f8f9ce4bf98beb7.png.webp'
                    width='46'
                    height='auto'
                    loading='lazy'
                    alt='Opción de pago'
                    className='object-contain'
                  />
                </div>
              </div>
              <div className='flex gap-2 flex-col'>
                <p className='text-green-700 mt-1 text-sm'>
                  <span className='font-semibold'>12 interest-free</span>{' '}
                  installments of {twelveInterestOf}
                </p>
                <div className='flex gap-2'>
                  <img
                    src='https://images.fravega.com/f300/d91d7904a85783a86377e30feb87e7ff.png.webp'
                    width='46'
                    height='auto'
                    loading='lazy'
                    alt='Opción de pago'
                    className='object-contain'
                  />
                  <img
                    src='https://images.fravega.com/f300/4af8f5c4d9776dcbd6862adf577b3856.png.webp'
                    width='46'
                    height='auto'
                    loading='lazy'
                    alt='Opción de pago'
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-3 gap-2 border-b-2 px-10'>
            <div className='flex  items-center gap-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='3 3.5 20 20'
                className='w-10 object-contain text-gray-700'
              >
                <path d='M15.03 7c.212 0 .397.137.468.333l.024.088.012 1.7h3.496c.113 0 .222.041.307.111l.059.058.045.06 2.21 3.591.343.6.003.01.003 4.604c0 .218-.13.41-.316.482l-.083.024-1.093.01-.005.071C20.411 20.01 19.391 21 18.181 21c-1.157 0-2.14-.907-2.305-2.094l-.017-.164-.005-.071h-5.498l-.005.071C10.26 20.01 9.24 21 8.03 21c-1.158 0-2.14-.907-2.305-2.094l-.017-.164-.005-.071H4.486a.488.488 0 0 1-.454-.33l-.023-.087L4 7.54c0-.1.028-.198.081-.285a.503.503 0 0 1 .254-.222l.081-.024L15.031 7Zm3.15 10.176c-.72 0-1.307.618-1.307 1.378 0 .76.586 1.379 1.308 1.379.72 0 1.308-.62 1.308-1.379 0-.76-.587-1.378-1.308-1.378Zm-10.15 0c-.722 0-1.309.618-1.309 1.378 0 .76.587 1.379 1.308 1.379.72 0 1.307-.62 1.307-1.379 0-.76-.586-1.378-1.307-1.378Zm12.983-3.092H15.54l.003 3.578h.468l.02-.048c.32-.813 1.015-1.368 1.834-1.483l.177-.018.134-.004c.879 0 1.674.512 2.073 1.319l.074.165.02.048h.67v-3.557Zm-6.482-6.04H4.972v9.597h.895l.02-.048c.367-.902 1.208-1.484 2.142-1.484.87 0 1.661.507 2.062 1.307l.075.163.019.047h4.356l-.01-9.583Zm1.005 2.106.003 2.97h5.062l-1.843-2.969h-3.222Z'></path>
              </svg>
              <p className='text-gray-700 text-sm'>Shipping: <span className='font-semibold'>${shipping}</span> </p>
            </div>
            <div className='flex items-center gap-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='-0.3 -3 24 24'
                className='w-10 object-contain'
              >
                <path d='M22.225 4.898c-.132.743-.604 1.679-1.328 1.978-.834.346-1.767.117-2.495-.61l-.01-.01a.541.541 0 0 0-.456-.154.573.573 0 0 0-.424.266c-.605.967-1.576 1.572-2.667 1.659a3.232 3.232 0 0 1-2.709-1.11.588.588 0 0 0-.86 0 3.217 3.217 0 0 1-2.701 1.111c-1.094-.087-2.069-.692-2.675-1.66a.568.568 0 0 0-.885-.106l-.096.093c-.723.668-1.635.855-2.442.5-.706-.309-1.163-1.23-1.289-1.957l-.02-.114h21.077l-.02.114zm-1.899 11.707h-5.33V11.37c0-.3-.258-.543-.575-.543l-5.455.012a.552.552 0 0 0-.455.53v5.235l-5.425.001v-8.41l.101.003c.042.002.083.003.125.003.664 0 1.329-.215 1.931-.626l.07-.048.058.064a4.65 4.65 0 0 0 3.101 1.598 4.332 4.332 0 0 0 3.172-1.014l.062-.052.063.052a4.325 4.325 0 0 0 3.178 1.013 4.64 4.64 0 0 0 3.093-1.594l.057-.065.072.049c.634.44 1.338.66 2.058.624l.1-.004v8.407zm-6.481 0H9.66v-4.612h4.185v4.611zM2.869 1.164h17.675l1.369 2.454H1.5l1.369-2.453zm20.536 3.218-.058-.182-1.93-3.88a.574.574 0 0 0-.515-.32H2.512a.572.572 0 0 0-.515.32L.037 4.275l-.006.02c-.008.028-.017.06-.026.107L0 4.465l.003.42C.053 6.19.755 7.303 1.881 7.86l.054.027.011 9.41c.074.415.553.473 1.061.473h18.295v-.163l.025-.027a.588.588 0 0 0 .15-.393V7.892l.054-.026c1.161-.579 1.882-1.779 1.882-3.132l-.008-.35z'></path>
              </svg>
              <p className='text-gray-700 text-sm'>
                Free pickup at our branches.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex gap-2'>
              <label>Quantity:</label>
              <input
                type='number'
                defaultValue={1}
                className='w-8 text-center border rounded'
                onChange={(e) => setQuantity(e.target.value)}
                min='1'
                max='10'
              />
            </div>

            <button
              onClick={() => addProductToCart()}
              className='bg-[#0176d3] p-2 m-3 w-60 rounded text-white hover:bg-[#0174d3ee]'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center mt-5 px-4 w-full md:px-20 lg:px-96 gap-2'>
        <h5 className='text-2xl font-bold'>Description</h5>
        <p className='w-full'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          nostrum nesciunt assumenda exercitationem doloremque voluptates odio,
          tenetur quasi inventore rerum tempora quam itaque officia sed atque,
          repudiandae ab, nam voluptate.
        </p>
      </div>
    </div>
  );
}
