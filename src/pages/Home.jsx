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
  return (
    <Layout>
      <MobileLimitedOffers />
      <LimitedOffers />
      <Search setSearch={setSearch} />
      <Filters setFilter={setFilter} setSort={setSort} />
      <ListOfProducts filter={filter} sort={sort} search={search} />
    </Layout>
  );
};

export default Home;
