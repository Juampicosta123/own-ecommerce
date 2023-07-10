import SearchIcon from '../icons/SearchIcon';

export default function Search() {
  return (
    <div className='flex items-center justify-center px-3 mt-3'>
      <div className='flex items-center justify-center mt-3 border border-[#0176d3] w-96 rounded'>
        <input
          type='text'
          placeholder='Samsung S21...'
          className='py-2 px-3 w-full focus:outline-none'
        />
        <SearchIcon className='bg-[#0176d3] w-[44px] h-auto p-2 text-white ' />
      </div>
    </div>
  );
}
