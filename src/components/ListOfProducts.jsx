import { useEffect, useState } from 'react';
import { cartProducts } from '../assets/mocks/products';
import ProductsList from './ProductsList';
import getFilterValues from '../utils/filter';

export default function ListOfProducts({
  filter,
  sort,
  search,
  minPrice,
  maxPrice
}) {
  const [filteredCartProducts, setFilteredCartProducts] = useState([
    cartProducts
  ]);

  useEffect(() => {
    setFilteredCartProducts(
      getFilterValues(search, filter, sort, minPrice, maxPrice)
    );
  }, [filter, sort, search, minPrice, maxPrice]);

  return (
    <div className='flex flex-col mb-10 min-h-[800px]'>
      {filteredCartProducts?.length === 0 ? (
        <p className='text-center font-bold mt-10'>No products found!</p>
      ) : (
        <ProductsList products={filteredCartProducts} />
      )}
    </div>
  );
}
