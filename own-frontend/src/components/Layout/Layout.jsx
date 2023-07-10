import Router from '../../router/Router';
import Header from '../Header/Header';
import MobileHeader from '../Header/MobileHeader';

export default function Layout () {
  return (
    <>
      <Header />
      <MobileHeader />
      <Router />
    </>
  );
}
