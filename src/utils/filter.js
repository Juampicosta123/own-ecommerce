import { cartProducts } from '../assets/mocks/products';

export default function getFilterValues(
  search = '',
  filter = '',
  sort = '',
  minPrice = 0,
  maxPrice = 2300
) {
  let productsSearched = cartProducts;
  if (search === '' && filter === '' && sort === '')
    return cartProducts
      .filter((product) => Number(product.newPrice) >= minPrice)
      .filter((product) => Number(product.newPrice) <= maxPrice);
  if (search && !filter && !sort)
    return cartProducts.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
        .filter((product) => Number(product.newPrice) > minPrice)
        .filter((product) => Number(product.newPrice) <= maxPrice)
    );
  productsSearched = cartProducts
    .filter((product) => Number(product.newPrice) > minPrice)
    .filter((product) => Number(product.newPrice) <= maxPrice)
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  if (filter === '' && sort === 'asc')
    return productsSearched?.sort(
      (a, b) => Number(a.newPrice) - Number(b.newPrice)
    );

  if (filter === '' && sort === 'desc')
    return productsSearched?.sort(
      (a, b) => Number(b.newPrice) - Number(a.newPrice)
    );
  if (filter !== '' && sort === '')
    return productsSearched?.filter((product) => product.category === filter);
  if (filter !== '' && sort === 'asc') {
    return productsSearched
      .filter((product) => product.category === filter)
      .sort((a, b) => Number(a.newPrice) - Number(b.newPrice));
  }
  if (filter !== '' && sort === 'desc')
    return productsSearched
      .filter((product) => product.category === filter)
      .sort((a, b) => Number(b.newPrice) - Number(a.newPrice));
}
