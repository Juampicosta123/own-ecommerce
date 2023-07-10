import { Route } from 'wouter';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/product/:id' component={Product} />
    </>
  );
}

export default App;
