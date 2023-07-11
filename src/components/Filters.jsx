export default function Filters({ setFilter, setSort }) {
  return (
    <div className='flex items-center gap-5 justify-center mt-5'>
      <div className='flex flex-col gap-2'>
        <h6>Filter by:</h6>
        <select onChange={(e) => setFilter(e.target.value)} className='border'>
          <option value=''>No filter</option>
          <option value='tv'>TVs</option>
          <option value='mobile'>Mobile Phone</option>
          <option value='audio'>Audio</option>
          <option value='notebook'>Notebooks</option>
          <option value='pc'>PC</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <h6>Sort price:</h6>
        <select onChange={(e) => setSort(e.target.value)} className='border'>
          <option value=''>No sort</option>
          <option value='desc'>Desc</option>
          <option value='asc'>Asc</option>
        </select>
      </div>
    </div>
  );
}
