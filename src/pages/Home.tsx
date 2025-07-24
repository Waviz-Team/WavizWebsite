import React from 'react';
import '../App.css'; // Global styles
import logo from '../assets/logo.png'; // Project logo image

// Home page component
export default function Home() {
  return (
    <div className="home">
      
      {/* upper section with logo and title */}
      <section className="section title-section">
        <div className="logo-text-wrapper">
          {/* Project logo */}
          <img src={logo} alt="Waviz Logo" className="logo" />
          {/* Project name */}
          <h1 className="title-heading">Waviz</h1>
        </div>
        {/* Short project description */}
        <p className="title-subtext">Real-Time Audio Visualization Made Easy</p>
      </section>

      {/* Section showing main features */}
      <section className="section features-section">
        <h2>Main Features</h2>
        <ul>
          <li>Real-time audio rendering</li>
          <li>Customizable visual styles</li>
          <li>Lightweight and powerful</li>
        </ul>
      </section>

      {/* Section explaining how to use the library */}
      <section className="section usage-section">
        <h2>How to Use</h2>
        <p>Install via npm and plug into your audio app in seconds.</p>
        <code>npm install waviz</code>
      </section>

      {/* Section describing the Plug-and-Play API */}
      <section className="section library-section">
        <h2>Powerful PnP Library</h2>
        <p>Just Plug and Play—Simple API with powerful customization.</p>
        <code>import Waviz from 'waviz'</code>
      </section>

      {/* Footer with links and copyright */}
      <footer className="section footer-section">
        <p>© 2025 Waviz</p>
        <div className="footer-links">
          <a href="#privacy">Privacy</a> ·
          <a href="#terms">Terms</a> ·
          <a href="https://github.com/Waviz-Team" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
      
    </div>
  );
}