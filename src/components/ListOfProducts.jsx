import { cartProducts } from '../assets/mocks/products';

export default function ListOfProducts() {
  return (
    <div className='grid items-center justify-center gap-2 lg:grid-cols-5 xs:grid-cols-1 md:grid-cols-3 mt-3 md:mt-0 md:py-3 md:px-20 lg:px-60'>
      {cartProducts.map((product) => {
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
            className='flex flex-col items-center justify-center border rounded p-3 gap-3 text-center cursor-pointer shadow-md hover:scale-[1.03] transition-scale duration-150 w-full h-[390px] mt-2'
          >
            <img
              src={product.img}
              alt={`${product.title} photo`}
              className='w-[250px] object-contain h-[250px]'
            />
            <div className='h-[130px] flex flex-col '>
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
              <p className='font-semibold text-xl mt-2'>${product.newPrice}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
