import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import showdown from 'showdown';
import './DocsMD.css';

export default function Docs() {
  // Showdown extenstion to open links in a new page
  const targetBlankExtension = () => {
    return [
      {
        type: 'output',
        filter: (text) => {
          return text.replace(
            /<a\s+href="(http[s]?:\/\/[^"]+)"([^>]*)>/g,
            '<a href="$1"$2 target="_blank" rel="noopener noreferrer">'
          );
        },
      },
    ];
  };

  // Showdown
  const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    extensions: [targetBlankExtension],
  });
  const [MD, setMD] = useState(null);

  useEffect(() => {
    fetch('/assets/docs/Docs.md')
      .then((res) => res.text())
      .then((text) => setMD(converter.makeHtml(text)));
  }, []);

  return (
    <div className='docsMDContent'>
      <img src='/assets/logos/coreDark.svg' height='100rem' />
      <h2>Documentation</h2>
      <div className='docsContainer'>
        <div className='index'>
          <a href='#introduction'>Introduction</a>
          <a href='#installation'>Installation</a>
        </div>
        <div
          className='markdown'
          dangerouslySetInnerHTML={{ __html: MD || '' }}
        />
      </div>
    </div>
  );
}
