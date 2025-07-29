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
      <footer className='footer-section'>
        
        <p>&copy; 2025 Waviz Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
