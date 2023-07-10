import { forwardRef } from 'react';
import './user.css';
import { Link } from 'react-router-dom';

const User = forwardRef(function (props, ref) {
  const isLogged = false;
  return (
    <div
      className={`hide-user ${
        props.mobile ? 'mobile-user-container' : 'user-container'
      }`}
      ref={ref}
    >
      {isLogged ? (
        <div className='logout'>
          <button className='logout-btn'>Logout</button>
        </div>
      ) : (
        <form className='login-form'>
          <h5>Sign in</h5>
          <input type='email' placeholder='jhonexam@gmail.com' />
          <input type='password' placeholder='password..' />
          <button className='login-btn'>Sign In</button>
          <p>
            Don´t have an account? <Link to='/register'>Register</Link>
          </p>
        </form>
      )}
    </div>
  );
});
export default User;
