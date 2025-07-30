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
            <source src='/assets/video/homeVideo.mp4' type='video/mp4' />
          </video>
          
        </div>

          <img src='/assets/logos/waviz.svg' className='mainLogo'/>
        <div className={`logo-text-wrapper ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
        </div>
        <h1 className={`title-subtext ${fadeIn ? 'fade-in' : 'pre-fade'}`}>
          Real-Time Audio Visualization Made Easy
        </h1>
      </section>

      {/* Features Section */}
      <section className='features-section'>
        <div className='sectionHeader'>
          <h1>Turn Sound Into Stunning Visuals</h1>
          <h3>
            Built for developers, Waviz helps you render high-performance audio
            visualizations with minimal setup and maximum flexibility.
          </h3>
        </div>
        <div className='sectionBlock'>
          <div>
            <h2>Real-Time Waveform Rendering</h2>
            <h4>
              Waviz captures audio data in real time and renders smooth,
              responsive waveforms directly onto your canvas. Whether you’re
              building an audio player, DJ app, or immersive experience, Waviz
              makes it easy to sync visuals with sound. Its lightweight engine
              ensures high performance with minimal latency, even on
              resource-constrained environments.
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/Wave2.gif' />
          </div>
        </div>
        <div className='sectionBlock sectionReversed'>
          <div>
            <h2>Optimized Performance with Web Audio API</h2>
            <h4>
              Waviz is engineered on top of the Web Audio API to deliver
              ultra-responsive, low-latency performance—ideal for real-time
              applications. It taps directly into the browser’s native audio
              processing capabilities, ensuring smooth visualization across
              platforms. Whether you’re working with live input or pre-recorded
              tracks, Waviz handles the heavy lifting so your visuals stay sharp
              and your code stays clean.
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/Bars3.gif' />
          </div>
        </div>
        <div className='sectionBlock'>
          <div>
            <h2>Modular & Customizable React Components</h2>
            <h4>
              Waviz offers a suite of React components designed for maximum
              flexibility and easy integration. Whether you’re dropping a
              waveform into a music player or layering visuals into a complex
              UI, each component is modular, themeable, and built to slot
              seamlessly into your React app. Tailor styles, behavior, and
              performance with props—no need to rewrite from scratch.
            </h4>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/Particles1.gif' />
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className='usage-section'>
        <img
          src='/assets/logos/core.svg'
          alt='Waviz Core logo'
          className='sectionLogo'
        />
        <div className='sectionBlock'>
          <div>
            <p>
              Waviz Core is designed to be both powerful and developer-friendly,
              giving you full control over audio visualization without the
              complexity. With a minimal setup—often under 10 lines of code—you
              can render real-time visuals directly onto your canvas. Whether
              you’re prototyping a quick demo or integrating into a full-scale
              application, Waviz Core provides the flexibility and performance
              you need to get up and running fast.
            </p>
            <code>npm install waviz</code>
          </div>
          <div className='code-block'>
            <p>import Waviz from '../Waviz'</p>
            <p>const visualizer = new Waviz(canvas,audio)</p>
            <p>visualizer.render()</p>
          </div>
        </div>
      </section>

      {/* Library Section */}

      <section className='library-section'>
            <img src='/assets/logos/pnp.svg' alt='Waviz Plug-n-Play Logo' className='sectionLogo'/>
        <div className='sectionBlock'>
          <div>
            <p>
              Waviz Plug-n-Play brings the power of audio visualization into a modern
              component-based architecture. With a growing set of modular,
              prebuilt components, you can drop responsive visualizers directly
              into your React app—no boilerplate required. Every component is
              designed to be themeable, flexible, and easy to configure via
              props, so you can focus on building experiences, not reinventing
              infrastructure.
            </p>
            <a href='/gallery' className='cta-button'>
              Explore
            </a>
          </div>
          <div>
            <img className='sectionImage' src='/assets/gallery/Mixed6.gif' />
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
