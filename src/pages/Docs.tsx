// src/pages/Docs.tsx
import React, { useState } from 'react';
import '../App.css';

export default function Docs() {
  // State for search input
  const [query, setQuery] = useState('');

  // API documentation data
  const apiList = [
    {
      name: 'Input',
      description: 'Handles audio input from microphone, file, or stream.',
    },
    {
      name: 'Analyzer',
      description: 'Processes audio signals and returns frequency data.',
    },
    {
      name: 'Visualizer',
      description: 'Renders real-time visuals on the canvas.',
    },
    {
      name: 'Component',
      description: 'Reusable visual modules for custom integration.',
    },
  ];

  // Filtered API list based on name or description
  const filteredApiList = apiList.filter((item) => {
    const q = query.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });
  

  return (
    <div className="docs-page">
      <header className="docs-header">
        <h1>Waviz Documentation</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim, justo ut
          malesuada fermentum, metus erat aliquet lacus, ut semper nulla justo ac nisl.
        </p>
      </header>

      {/* Search Input */}
      <section className="docs-search">
        <input
          type="text"
          placeholder="Search documentation..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <section className="docs-section">
        <h2>Installation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vestibulum
          eget commodo libero.
        </p>
        <code className="code-block">npm install waviz</code>
      </section>

      <section className="docs-section">
        <h2>Getting Started</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium, est vitae
          hendrerit suscipit, justo erat vehicula sapien, nec elementum nisi mi non lacus.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
      </section>

      <section className="docs-section">
        <h2>API Overview</h2>
        {filteredApiList.length > 0 ? (
          <ul>
            {filteredApiList.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong> – {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#888' }}>No results found.</p>
        )}
      </section>
    </div>
  );
}
