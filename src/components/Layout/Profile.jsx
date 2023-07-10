import { useRef } from 'react';
import ProfileMenu from './ProfileMenu';
import ProfileIcon from '../../icons/ProfileIcon';

export default function Profile() {
  const menuRef = useRef();

  function showProfileMenu() {
    menuRef.current.classList.toggle('invisible');
  }

  return (
    <>
      <ProfileIcon showProfileMenu={showProfileMenu}/>
      <ProfileMenu ref={menuRef} />
    </>
  );
}
