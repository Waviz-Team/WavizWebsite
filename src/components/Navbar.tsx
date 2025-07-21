// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          Waviz
        </Link>
      </div>
      <div>
        <Link to="/docs" style={navLinkStyle}>Docs</Link>
        <Link to="/gallery" style={navLinkStyle}>Gallery</Link>
        <Link to="/about" style={navLinkStyle}>Team</Link>
        <a
          href="https://github.com/OSP1-CSVJ/Waviz"
          target="_blank"
          rel="noopener noreferrer"
          style={navLinkStyle}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  marginLeft: '1.5rem',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 500,
};

