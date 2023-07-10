import { useState } from 'react';
import Filters from '../components/Filters';
import Layout from '../components/Layout/Layout';
import LimitedOffers from '../components/LimitedOffers';
import ListOfProducts from '../components/ListOfProducts';
import MobileLimitedOffers from '../components/MobileLimitedOffers';
import Search from '../components/Search';

const Home = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  return (
    <Layout>
      <MobileLimitedOffers />
      <LimitedOffers />
      <Search />
      <Filters setFilter={setFilter} setSort={setSort} />
      <ListOfProducts filter={filter} sort={sort} />
    </Layout>
  );
};

export default Home;
