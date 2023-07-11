import './filters.css';

export default function Filters({
  setFilter,
  setSort,
  setMinPrice,
  minPrice,
  setMaxPrice,
  maxPrice
}) {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-2 justify-center mt-5'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <label htmlFor='filter' className='text-center'>
          Filter By
        </label>
        <select
          id='filter'
          onChange={(e) => setFilter(e.target.value)}
          className='border'
        >
          <option value=''>No filter</option>
          <option value='tv'>TVs</option>
          <option value='mobile'>Mobile Phone</option>
          <option value='audio'>Audio</option>
          <option value='notebook'>Notebooks</option>
          <option value='pc'>PC</option>
        </select>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <label htmlFor='sort' className='text-center'>
          Sort Price By
        </label>
        <select
          id='sort'
          onChange={(e) => setSort(e.target.value)}
          className='border'
        >
          <option value=''>No sort</option>
          <option value='desc'>Desc</option>
          <option value='asc'>Asc</option>
        </select>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <label htmlFor='minPrice' className='text-center'>
          Minimum Price
        </label>
        <div className='flex items-center justify-center gap-1'>
          <input
            className=''
            onChange={(e) => setMinPrice(e.target.value)}
            id='minPrice'
            type='range'
            defaultValue={0}
            min={0}
            max={2300}
          />
          <label htmlFor='minPrice' className='absolute text-sm'>
            {minPrice}
          </label>
        </div>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <label htmlFor='maxPrice' className='text-center'>
          Maximum Price
        </label>
        <div className='flex items-center justify-center gap-1'>
          <input
            onChange={(e) => setMaxPrice(e.target.value)}
            id='maxPrice'
            type='range'
            defaultValue={2300}
            min={minPrice}
            max={3000}
          />
          <label className='absolute text-sm' htmlFor='maxPrice'>
            {maxPrice}
          </label>
        </div>
      </div>
    </div>
  );
}
