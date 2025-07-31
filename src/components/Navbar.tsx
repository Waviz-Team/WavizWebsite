// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-title'>
        <Link to='/'>
          <img
            src='/assets/logos/waviz.svg'
            alt='Waviz Logo'
            className='logo'
          />
        </Link>
      </div>
      <div className='navbarButtons'>
        <Link to='/docs'>Docs</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link className='hideOnSmallScreen' to='/about'>
          Team
        </Link>
        <a
          className='hideOnSmallScreen'
          href='https://github.com/Waviz-Team/Waviz'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub
        </a>
      </div>
    </nav>
  );
}
