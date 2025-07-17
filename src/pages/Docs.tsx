import React, { useState } from 'react';
import '../App.css';

export default function Docs() {
  const [query, setQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };

  const apiList = [
    {
      name: 'Input',
      description: 'Handles audio input from microphone, file, or stream.',
      content: `The Input module allows developers to choose from multiple audio sources.`,
      methods: [
        {
          name: 'connectAudioSource',
          description: 'A router that takes in an audioSource and identifies type.',
          content: 'input.connectAudioSource(audioSource);',
        },
        {
          name: 'initializePending',
          description: 'Awaits permission for async media sources.',
          content: 'await input.initializePending();',
        },
      ],
    },
    {
      name: 'Analyzer',
      description: 'Processes audio signals and returns frequency data.',
      content: `Analyzer transforms audio into frequency/time-domain data.`,
      methods: [
        {
          name: 'getFrequencyData',
          description: 'Returns array of frequency data.',
          content: 'const data = analyzer.getFrequencyData();',
        },
      ],
    },
    {
      name: 'Visualizer',
      description: 'Renders real-time visuals on the canvas.',
      content: `Visualizer connects to the canvas and draws audio patterns.`,
      methods: [
        {
          name: 'draw',
          description: 'Draws visualization on canvas.',
          content: 'visualizer.draw(canvas);',
        },
      ],
    },
    {
      name: 'Component',
      description: 'Reusable visual modules for custom integration.',
      content: `Component provides React components like <WaveViz />`,
      methods: [
        {
          name: 'WaveViz',
          description: 'React component for waveform visualization.',
          content: '<WaveViz audioSource="file" />',
        },
      ],
    },
  ];

  const filteredApiList = apiList.filter(({ name, description, content }) => {
    const q = query.toLowerCase().trim();
    return (
      name.toLowerCase().includes(q) ||
      description.toLowerCase().includes(q) ||
      content.toLowerCase().replace(/\s+/g, ' ').includes(q)
    );
  });

  return (
    <div className="docs-page">
      <header className="docs-header">
        <h1>Waviz Documentation</h1>
        <p>Learn how to use Waviz for real-time audio visualization.</p>
      </header>

      <section className="docs-search">
        <input
          type="text"
          placeholder="Search documentation..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <div className="docs-container">
        <aside className="docs-sidebar">
          <ul>
            {apiList.map((item, index) => (
              <li key={item.name}>
                <button onClick={() => toggleSection(index)}>{item.name}</button>
                {expandedSection === index && (
                  <ul>
                    {(item.methods || []).map((method) => (
                      <li key={method.name}>
                        <a href={`#${method.name.toLowerCase()}`}>{method.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <main className="docs-content">
          <section className="docs-section">
            <h2>Installation</h2>
            <p>Install Waviz via npm:</p>
            <pre className="code-block">npm install waviz</pre>
          </section>

          <section className="docs-section">
            <h2>Getting Started</h2>
            <p>Waviz renders real-time audio visualizations in web apps.</p>
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
                    {item.methods && item.methods.map((method) => (
                      <div key={method.name}>
                        <h4 id={method.name.toLowerCase()}>{method.name}</h4>
                        <p>{method.description}</p>
                        <pre className="code-block">{method.content}</pre>
                      </div>
                    ))}
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
