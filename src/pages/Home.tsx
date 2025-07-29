// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import '../App.css';
// @ts-ignore

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // fade in after 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='home'>
      {/* Title Section */}
      <section className='section title-section'>
        <div className='video-background'>
          <video autoPlay loop muted playsInline>
            <source src='/assets/video/test.mp4' type='video/mp4' />
          </video>
          <div className='overlay' />
        </div>

        <div className={`logo-text-wrapper ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
          <h1 className='title-heading'>Waviz</h1>
        </div>
        <p className={`title-subtext ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
          Real-Time Audio Visualization Made Easy
        </p>
      </section>

      {/* Features Section */}
      <section className='features-section'>
        <div className='sectionHeader'>
          <h1>Create Audio Visualizations Easily</h1>
          <h3>
            Waviz lets you integrate audio visualizations in your application in
            under 10 lines of code
          </h3>
        </div>
        <div className='sectionBlock'>
          <div>
            <h2>Real-Time Waveform Rendering</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/waviz1.jpeg' />
          </div>
        </div>
        <div className='sectionBlock sectionReversed'>
          <div>
            <h2>Real-Time Waveform Rendering</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/waviz1.jpeg' />
          </div>
        </div>
        <div className='sectionBlock'>
          <div>
            <h2>Real-Time Waveform Rendering</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/waviz1.jpeg' />
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className='usage-section'>
        <h2>Core</h2>
        <div className='sectionBlock'>
          <div>
            <h4>Get up and running in less that 10 lines of code</h4>
            <code>npm install waviz</code>
          </div>
          <div className='code-block'>
            <p>import waviz new waviz waviz.render</p>
          </div>
        </div>
      </section>

      {/* Library Section */}

      <section className='library-section'>
        <div className='sectionBlock'>
          <div>
            <h2>Powerful Plug-n-play library</h2>
            <h4>
              Waviz empowers developers to integrate stunning audio
              visualizations with just a few lines of code. No hassle. Just
              results.
            </h4>
            <a href='/gallery' className='cta-button'>
              Explore
            </a>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/waviz1.jpeg' />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-column">
            <h3
              style={{ cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Waviz
            </h3>
            <p>2025, all rights reserved</p>
            <div className="footer-icons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/githubWhite.svg" alt="GitHub" className="footer-icon" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/linkedInWhite.svg" alt="LinkedIn" className="footer-icon" />
              </a>
              <a href="https://npmjs.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/npmWhite.svg" alt="NPM" className="footer-icon" />
              </a>
            </div>

          </div>
          <div className="footer-column">
            <h3>Learn Waviz</h3>
            <ul>
              <li><a href="/docs">Docs</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">Team</a></li>
              <li><a href="https://github.com/Waviz-Team">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>In the News</h3>
            <ul>
              <li><a href="#">Product Hunt</a></li>
              <li><a href="#">Medium</a></li>
              <li><a href="#">Hackernoon</a></li>
              <li><a href="#">reddit</a></li>
            </ul>
          </div>
        </div>
      </footer>


    </div>
  );
}
