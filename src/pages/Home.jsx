import { useState } from 'react';
import Filters from '../components/Filters';
import Layout from '../components/Layout/Layout';
import LimitedOffers from '../components/LimitedOffers';
import ListOfProducts from '../components/ListOfProducts';
import MobileLimitedOffers from '../components/MobileLimitedOffers';
import Search from '../components/Search';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2300);
  return (
    <Layout>
      <MobileLimitedOffers />
      <LimitedOffers />
      <Search setSearch={setSearch} />
      <Filters
        setFilter={setFilter}
        setSort={setSort}
        setMinPrice={setMinPrice}
        minPrice={minPrice}
        setMaxPrice={setMaxPrice}
        maxPrice={maxPrice}
      />
      <ListOfProducts
        filter={filter}
        sort={sort}
        search={search}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </Layout>
  );
};

export default Home;
