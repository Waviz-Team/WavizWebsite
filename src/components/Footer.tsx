import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-column'>
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            src='/assets/logos/waviz.svg'
            className='footerLogo'
          />

          <p>2025, all rights reserved</p>
          <div className='footer-icons'>
            <a
              href='https://github.com/Waviz-Team/Waviz'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/logos/githubWhite.svg'
                alt='GitHub'
                className='footer-icon'
              />
            </a>
            {/* <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/logos/linkedInWhite.svg'
                alt='LinkedIn'
                className='footer-icon'
              />
            </a> */}
            <a
              href='https://www.npmjs.com/package/waviz'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='/assets/logos/npmWhite.svg'
                alt='NPM'
                className='footer-icon'
              />
            </a>
          </div>
        </div>
        <div className='footer-column'>
          <h3>Learn Waviz</h3>
          <ul>
            <li>
              <a href='/docs'>Docs</a>
            </li>
            <li>
              <a href='/gallery'>Gallery</a>
            </li>
            <li>
              <a href='/about'>Team</a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3>News</h3>
          <ul>
            <li>
              <a target='_blank' href='https://www.producthunt.com/products/waviz-visualization-library?launch=waviz-visualization-library'>
                Product Hunt
              </a>
            </li>
            <li>
              <a target='_blank' href='https://medium.com/@seungtaekoh5/if-react-had-a-built-in-audio-visualizer-it-would-like-this-240d93ec6505'>
                Medium
              </a>
            </li>
            <li>
              <a target='_blank' href='https://hackernoon.com'>
                Hackernoon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
