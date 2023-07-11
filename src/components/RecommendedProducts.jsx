import { cartProducts } from '../assets/mocks/products';

export default function RecommendedProducts({ category }) {
  const products = cartProducts
    .filter((product) => product.category === category)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className='hidden md:flex lg:flex flex-col p-10 lg:px-72 gap-2 mt-5'>
      <h5 className='text-3xl font-bold text-[#032d60]'>
        Recommended Products
      </h5>
      <div className='grid grid-cols-4 gap-2'>
        {products.map((product) => {
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
              className='flex flex-col items-center justify-center border rounded p-3 text-center cursor-pointer shadow-md hover:scale-[1.03] transition-scale duration-150 mt-2'
            >
              <img
                src={product.img}
                alt={`${product.title} photo`}
                className=' lg:w-[150px] md:w-[120px] w-[50px] h-[40px] object-contain md:h-[150px] lg:h-[250px]'
              />
              <div className='h-[20px] md:h-[120px] flex flex-col '>
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
    </div>
  );
}
