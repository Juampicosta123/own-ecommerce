import Layout from '../components/Layout/Layout';
import { cartProducts } from '../assets/mocks/products';
import { useRoute } from 'wouter';
import ProductDetail from '../components/ProductDetail';
import RecommendedProducts from '../components/RecommendedProducts';
import RecommendedProduct from '../components/RecommendedProduct';

export default function Product() {
  const id = useRoute('/product/:id')[1].id;

  const product = cartProducts.filter((product) => id == product.id)[0];

  return (
    <div>
      <Layout>
        <ProductDetail product={product} />
        <RecommendedProducts category={product.category} />
        <RecommendedProduct category={product.category} />
      </Layout>
    </div>
  );
}
