import { Link } from 'react-router-dom';
import './dropdown.css';

export default function Dropdown({ dropdown }) {
  return (
    <div className='dropdown-container'>
      {dropdown.map((item) => (
        <div className='dropdown' key={item.id}>
          <p className='dropbtn'>{item?.label}</p>
          <div className='dropdown-content'>
            {item?.navs?.map((item) => (
              <Link to={item.to} key={item.id} className='nav-item'>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
