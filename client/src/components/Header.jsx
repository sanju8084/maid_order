import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-orange-300'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
        <img src="./logo.png" className='w-18 h-20' />
        </Link>
        <ul className='flex gap-4'>
           <Link to='/'> <li>Home</li></Link>
           <Link to='/services'> <li>Services</li></Link>
           <Link to='/about'> <li>About</li></Link>
           <Link to='/contact'> <li>Contact</li></Link>
           <Link to='/sign-in'> <li>Sign In</li></Link>

        </ul>
        </div>
            

    </div>
  );
}
