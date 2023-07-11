import { useRef, useState } from 'react';
import { limitedOffers } from '../assets/mocks/limitedoffers';

export default function LimitedOffers() {
  const [offers, setOffers] = useState(limitedOffers.slice(0, 4));
  let prevLimit = useRef(0);
  let limit = useRef(4);

  function nextPage() {
    if (prevLimit.current + 4 > limitedOffers.length - 4) return;
    prevLimit.current += 4;
    limit.current += 4;
    setOffers(limitedOffers.slice(prevLimit.current, limit.current));
  }

  function prevPage() {
    if (prevLimit.current - 4 < 0) return;
    prevLimit.current -= 4;
    limit.current -= 4;
    setOffers(limitedOffers.slice(prevLimit.current, limit.current));
  }

  return (
    <section className='hidden relative border rounded shadow-md mt-8 md:mx-10 lg:mx-60 md:flex lg:flex flex-col items-center justify-center'>
      <div className='w-full bg-[#B828AE] p-3 text-center'>
        <h1 className='text-4xl font-bold text-white'>Limited Offers</h1>
      </div>
      <div className='grid items-center justify-center gap-2 grid-cols-4 p-8'>
        {offers.map((product) => {
          let discount;
          if (product.oldPrice) {
            discount = Math.floor(
              ((product.oldPrice - product.newPrice) * 100) / product.oldPrice
            );
          }

          return (
            <a
              href={`/product/${product.id}`}
              key={product.id}
              className='flex flex-col items-center justify-center border rounded p-3 gap-3 text-center cursor-pointer shadow-md hover:scale-[1.03] transition-scale duration-150 mt-2'
            >
              <img
                src={product.img}
                alt={`${product.title} photo`}
                className=' lg:w-[250px] md:w-[150px] w-[80px] h-[40px] object-contain md:h-[150px] lg:h-[250px]'
              />
              <div className='h-[20px] md:h-[130px] flex flex-col '>
                <h5>{product.title}</h5>
                {product.oldPrice ? (
                  <div className='flex gap-2 items-center justify-center text-sm'>
                    <p className='text-gray-400 line-through'>
                      ${product.oldPrice}
                    </p>
                    <p className='bg-red-600 text-white rounded p-1 font-semibold'>
                      {discount}% OFF
                    </p>
                  </div>
                ) : (
                  ''
                )}
                <p className='font-semibold text-xl mt-2'>
                  ${product.newPrice}
                </p>
              </div>
            </a>
          );
        })}
      </div>
      <button onClick={prevPage} className='absolute -left-3 lg:left-0 top-64'>
        <svg
          fill='currentColor'
          viewBox='0 0 16 16'
          className='w-14 text-gray-700'
        >
          <path
            fillRule='evenodd'
            d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z'
          />
        </svg>
      </button>
      <button
        onClick={nextPage}
        className='absolute -right-3 lg:right-0 top-64'
      >
        <svg
          fill='currentColor'
          viewBox='0 0 16 16'
          className='w-14 text-gray-700'
        >
          <path
            fillRule='evenodd'
            d='M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z'
          />
        </svg>
      </button>
    </section>
  );
}
