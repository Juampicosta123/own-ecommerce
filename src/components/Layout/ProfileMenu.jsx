import { forwardRef } from 'react';
import LinkNav from './LinkNav';

const ProfileMenu = forwardRef(function (props, ref) {
  return (
    <div ref={ref} className=' invisible shadow-xl'>
      <div className='border absolute top-[38px] md:top-[56px] right-2 md:right-6  bg-white  lg:right-16 rounded  p-3 shadow-xl'>
        <div className='flex flex-col gap-2'>
          <LinkNav title='Profile' color='text-[#032d60]' href='profile' />
          <LinkNav title='Settings' color='text-[#032d60]' href='settings' />
        </div>
      </div>
    </div>
  );
});

export default ProfileMenu;
