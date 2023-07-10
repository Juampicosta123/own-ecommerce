import { useRef, useState } from 'react';
import Navigation from './Navigation';
import RightNav from './RightNav';
import Info from './Info';

const Layout = ({ children }) => {
  const cartMenuRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  function showCart() {
    cartMenuRef?.current?.classList?.toggle('right-[-600px]');
    cartMenuRef?.current?.classList?.toggle('right-0');
    setIsOpened(!isOpened);
  }

  return (
    <>
      <header className='flex items-center justify-between p-3 md:p-5 md:px-10 lg:px-20 text-[#032d60] '>
        <Navigation />
        <RightNav
          isOpened={isOpened}
          setIsOpened={setIsOpened}
          ref={cartMenuRef}
          showCart={showCart}
        />
      </header>
      <Info />
      <main
        className={
          isOpened
            ? ' blur-[1px] opacity-90 transition-all ease-in-out duration-500'
            : ''
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
