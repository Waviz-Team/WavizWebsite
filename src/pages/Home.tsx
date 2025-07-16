// src/pages/Home.tsx
import React from 'react';
import '../App.css'; 
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="home">
      <section className="section title-section">
        <img src={logo} alt="Waviz Logo" className="logo" />
        <h1 className="title-heading">Waviz</h1>
        <p className="title-subtext">Real-Time Audio Visualization Made Easy</p>
      </section>

      <section className="section features-section">
        <h2>Main Features</h2>
        <ul>
          <li>Real-time audio rendering</li>
          <li>Customizable visual styles</li>
          <li>Lightweight and powerful</li>
        </ul>
      </section>

      <section className="section usage-section">
        <h2>How to Use</h2>
        <p>Install via npm and plug into your audio app in seconds.</p>
        <code>npm install waviz</code>
      </section>

      <section className="section library-section">
        <h2>Powerful PnP Library</h2>
        <p>Just Plug and Play—Simple API with powerful customization.</p>
      </section>

      <footer className="section footer-section">
        <p>Footer</p>
      </footer>
    </div>
  );
}
