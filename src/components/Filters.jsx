export default function Filters() {
  return (
    <div className='flex items-center gap-5 justify-center mt-5'>
      <div className='flex flex-col gap-2'>
        <h6>Filter by:</h6>
        <select className='border'>
          <option value=''>No filter</option>
          <option value='TV'>TVs</option>
          <option value='mobile'>Mobile Phones</option>
          <option value='audio'>Audio</option>
          <option value='notebook'>Notebooks</option>
          <option value='pc'>PC</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <h6>Sort price:</h6>
        <select className='border'>
          <option value='desc'>Desc</option>
          <option value='asc'>Asc</option>
        </select>
      </div>
    </div>
  );
}