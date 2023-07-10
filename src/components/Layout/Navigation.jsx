import LinkNav from './LinkNav';

const Navigation = () => {
  return (
    <div className='flex gap-5'>
      <LinkNav title='Store' href='store'/>
      <LinkNav title='About us' href='about-us'/>
      <LinkNav title='Contact' href='contact'/>
    </div>
  );
};

export default Navigation;
