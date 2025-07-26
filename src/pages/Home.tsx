// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // fade in after 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* Title Section */}
      <section className="section title-section">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/assets/video/test.mp4" type="video/mp4" />
          </video>
          <div className="overlay" />
        </div>

        <div className={`logo-text-wrapper ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
          <img src={logo} alt="Waviz Logo" className="logo" />
          <h1 className="title-heading">Waviz</h1>
        </div>
        <p className={`title-subtext ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
          Real-Time Audio Visualization Made Easy
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Real-time waveform rendering</li>
          <li>Modular and customizable components</li>
          <li>Optimized performance with Web Audio API</li>
        </ul>
      </section>

      {/* Usage Section */}
      <section className="usage-section">
        <h2>Ease of Use</h2>
        <p>Install the package and begin visualizing audio effortlessly.</p>
        <a
          href="https://www.npmjs.com/package/waviz"
          target="_blank"
          rel="noopener noreferrer"
          className="code-link"
        >
          <code>npm install waviz</code>
        </a>
      </section>

      {/* Library Section */}
      <section className="library-section">
        <h2>Powerful Plug-and-Play Library</h2>
        <p>
          Waviz empowers developers to integrate stunning audio visualizations with just a few lines of code. No hassle. Just results.
        </p>
        <a href="/gallery" className="cta-button">Explore</a>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2025 Waviz Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
