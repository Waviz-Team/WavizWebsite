import React, { useState } from 'react';
import '../App.css';

export default function Docs() {
  const [query, setQuery] = useState('');

  const apiList = [
    {
      name: 'Input',
      description: 'Handles audio input from microphone, file, or stream.',
      content: `
The Input module allows developers to choose from multiple audio sources.
You can use a file, live microphone, or even a remote stream.

Example:
<Input source="microphone" />`,
    },
    {
      name: 'Analyzer',
      description: 'Processes audio signals and returns frequency data.',
      content: `
Analyzer takes in raw audio and transforms it into frequency or time-domain data.
You can specify FFT size, smoothing, and get live updates.

Example:
const data = analyzer.getFrequencyData();`,
    },
    {
      name: 'Visualizer',
      description: 'Renders real-time visuals on the canvas.',
      content: `
Visualizer connects to the canvas and draws waveforms or frequency bars.
Customize styles, colors, and animation speeds.

Example:
visualizer.draw(canvas);`,
    },
    {
      name: 'Component',
      description: 'Reusable visual modules for custom integration.',
      content: `
Component provides plug-and-play React components like <WaveViz /> or <BarViz />.
These are built with customization in mind.

Example:
<WaveViz audioSource="file" />`,
    },
  ];

  const filteredApiList = apiList.filter(({ name, description, content }) => {
    const q = query.toLowerCase().trim();
    return (
      name.toLowerCase().includes(q) ||
      description.toLowerCase().includes(q) ||
      content.toLowerCase().includes(q)
    );
  });

  return (
    <div className="docs-page">
      <header className="docs-header">
        <h1>Waviz Documentation</h1>
        <p>
          Learn how to use Waviz for real-time audio visualization. Browse components, API usage,
          and integration methods.
        </p>
      </header>

      {/* Search */}
      <section className="docs-search">
        <input
          type="text"
          placeholder="Search documentation..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      {/* Sidebar and Content */}
      <div className="docs-container">
        <aside className="docs-sidebar">
          <ul>
            {apiList.map((item) => (
              <li key={item.name}>
                <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="docs-content">
          <section className="docs-section">
            <h2>Installation</h2>
            <p>Install Waviz via npm and get started quickly.</p>
            <pre className="code-block">npm install waviz</pre>
          </section>

          <section className="docs-section">
            <h2>Getting Started</h2>
            <p>
              Waviz is a simple yet powerful tool for rendering real-time audio visualizations in
              your web apps.
            </p>
            <p>
              Just connect your audio source, choose a visualization component, and you're ready to
              go!
            </p>
          </section>

          <section className="docs-section">
            <h2>API Overview</h2>
            {filteredApiList.length > 0 ? (
              <ul>
                {filteredApiList.map((item) => (
                  <li key={item.name} className="api-item">
                    <h3 id={item.name.toLowerCase()}>{item.name}</h3>
                    <p>{item.description}</p>
                    <pre className="code-block">{item.content}</pre>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#888' }}>No results found.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
