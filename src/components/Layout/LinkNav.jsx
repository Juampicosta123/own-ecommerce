import { Link } from 'wouter';

const LinkNav = ({ title, href, color }) => {
  return (
    <Link
      className={`${color} text-xs md:text-[15px] hover:scale-105 font-semibold text-center`}
      href={href}
    >
      {title}
    </Link>
  );
};

export default LinkNav;
