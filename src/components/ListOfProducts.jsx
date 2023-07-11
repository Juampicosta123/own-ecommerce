import { useEffect, useState } from 'react';
import { cartProducts } from '../assets/mocks/products';
import ProductsList from './ProductsList';
import getFilterValues from '../utils/filter';

export default function ListOfProducts({ filter, sort, search }) {
  const [filteredCartProducts, setFilteredCartProducts] = useState([
    cartProducts
  ]);

  useEffect(() => {
    setFilteredCartProducts(getFilterValues(search, filter, sort));
  }, [filter, sort, search]);

  return (
    <div className='flex flex-col items-center justify-center mb-10'>
      {filteredCartProducts?.length === 0 ? (
        <p className='text-center font-bold mt-5'>
          There are no products in this category!
        </p>
      ) : (
        <ProductsList products={filteredCartProducts} />
      )}
    </div>
  );
}
