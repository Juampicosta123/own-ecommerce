import Filters from '../components/Filters';
import Layout from '../components/Layout/Layout';
import LimitedOffers from '../components/LimitedOffers';
import ListOfProducts from '../components/ListOfProducts';
import MobileLimitedOffers from '../components/MobileLimitedOffers';
import Search from '../components/Search';

const Home = () => {
  return (
    <Layout>
      <MobileLimitedOffers />
      <LimitedOffers />
      <Search />
      <Filters />
      <ListOfProducts />
    </Layout>
  );
};

export default Home;
