import { Link } from 'react-router-dom';
import './mobile-dropdown.css';

export default function MobileDropdown({ dropdown }) {
  return (
    <div className='mobile-dropdown-container'>
      {dropdown.map((item) => (
        <div className='mobile-dropdown' key={item.id}>
          <p className='mobile-dropbtn'>{item?.label}</p>
          <div className='mobile-dropdown-content'>
            {item?.navs?.map((item) => (
              <Link to={item.to} key={item.id} className='mobile-nav-item'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
