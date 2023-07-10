import { useRef } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './header.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import User from './User';

const navs = [
  {
    id: 1,
    label: 'Outlet',
    to: '/outlet'
  },
  {
    id: 2,
    label: 'Contact',
    to: '/contact'
  },
  {
    id: 3,
    label: 'About us',
    to: '/about-us'
  }
];

const dropdown = [
  {
    id: 1,
    label: 'Mobile',
    navs: [
      {
        id: 1,
        label: 'Samsung',
        to: '/samsung'
      },
      {
        id: 2,
        label: 'Iphone',
        to: '/iphone'
      }
    ]
  },
  {
    id: 2,
    label: 'Notebooks',
    navs: [
      {
        id: 1,
        label: 'Samsung',
        to: '/samsung'
      },
      {
        id: 2,
        label: 'Iphone',
        to: '/iphone'
      }
    ]
  },
  {
    id: 3,
    label: 'Components',
    navs: [
      {
        id: 1,
        label: 'Samsung',
        to: '/samsung'
      },
      {
        id: 2,
        label: 'Iphone',
        to: '/iphone'
      }
    ]
  },
  {
    id: 4,
    label: 'Smart TV',
    navs: [
      {
        id: 1,
        label: 'Samsung',
        to: '/samsung'
      },
      {
        id: 2,
        label: 'Iphone',
        to: '/iphone'
      }
    ]
  }
];

export default function Header() {
  const cartRef = useRef();
  const userRef = useRef();

  const showCart = () => {
    if(userRef.current.classList.contains('show-user')){
      userRef?.current?.classList?.toggle('show-user');
      userRef?.current?.classList?.toggle('hide-user');
    } 
    cartRef?.current?.classList?.toggle('show-cart');
    cartRef?.current?.classList?.toggle('hide-cart');
  };

  const showUser = () => {
    if(cartRef.current.classList.contains('show-cart')){
      cartRef?.current?.classList?.toggle('show-cart');
      cartRef?.current?.classList?.toggle('hide-cart');
    } 
    userRef?.current?.classList?.toggle('show-user');
    userRef?.current?.classList?.toggle('hide-user');
  };
  return (
    <header className='header'>
      <div className='top-wrapper'>
        <div className='top-section'>
          <section className='left-section'>
            {navs.map((nav) => (
              <Link to={nav.to} key={nav.id} className='nav-item'>
                {nav.label}
              </Link>
            ))}
          </section>
          <section className='right-section'>
            <div className='user-section'>
              <Cart ref={cartRef} />
              <User ref={userRef} />
              <button className='cart-btn' onClick={showCart}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
                  <p className='quantity'>2</p>
              </button>
              <button className='cart-btn' onClick={showUser}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className='bottom-section'>
        <Dropdown dropdown={dropdown} />
      </div>
    </header>
  );
}
