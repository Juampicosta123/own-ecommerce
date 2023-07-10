import { useEffect, useState } from 'react';
import { cartProducts } from '../assets/mocks/products';
import ProductsList from './ProductsList';

export default function ListOfProducts({ filter, sort }) {
  const [filteredCartProducts, setFilteredCartProducts] = useState([]);

  useEffect(() => {
    setFilteredCartProducts(function getValues() {
      if (filter === '' && sort === '') return cartProducts;
      if (filter === '' && sort === 'asc')
        return cartProducts.sort(
          (a, b) => Number(a.newPrice) - Number(b.newPrice)
        );

      if (filter === '' && sort === 'desc')
        return cartProducts.sort(
          (a, b) => Number(b.newPrice) - Number(a.newPrice)
        );
      if (filter !== '' && sort === '')
        return cartProducts.filter((product) => product.category === filter);
      if (filter !== '' && sort === 'asc') {
        return cartProducts
          .filter((product) => product.category === filter)
          .sort((a, b) => Number(a.newPrice) - Number(b.newPrice));
      }
      if (filter !== '' && sort === 'desc')
        return cartProducts
          .filter((product) => product.category === filter)
          .sort((a, b) => Number(b.newPrice) - Number(a.newPrice));
    });
  }, [filter, sort]);

  return (
    <div className='flex flex-col items-center justify-center'>
      {filter || sort ? (
        filteredCartProducts.length === 0 ? (
          <p className='text-center font-bold mt-5'>
            There are no products in this category!
          </p>
        ) : (
          <ProductsList products={filteredCartProducts} />
        )
      ) : (
        <ProductsList products={cartProducts} />
      )}
    </div>
  );
}
