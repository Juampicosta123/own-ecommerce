export default function IconCartShopping({ showCart }) {
  return (
    <svg
      onClick={showCart}
      viewBox='0 0 576 512'
      fill='currentColor'
      className='w-5 md:w-8 cursor-pointer relative hover:scale-105 transition-scale duration-100 opacity-90'
    >
      <path d='M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z' />
    </svg>
  );
}
