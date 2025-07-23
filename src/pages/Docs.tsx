// Docs.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { BST } from '../components/bst';

export default function Docs() {
  const [query, setQuery] = useState('');
  const [filteredApiList, setFilteredApiList] = useState<any[]>([]);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [highlightedMethod, setHighlightedMethod] = useState<string | null>(null);
  const bstRef = useRef<BST | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };

  const apiList = [
    {
      name: 'Input Class',
      description: 'The Input class helps initialize audio sources.',
      content: '',
      methods: [
        { name: 'connectAudioSource', description: 'Routes the audio input to the right handler.', content: 'input.connectAudioSource(audioSource);' },
        { name: 'connectToAudioElement', description: 'Connects audio from an <audio> tag or file.', content: 'input.connectToAudioElement(audioElement);' },
        { name: 'connectToMediaStream', description: 'Handles input from microphone or screen audio.', content: 'input.connectToMediaStream(mediaStream);' },
        { name: 'initializePending', description: 'Waits for user permission before playing audio.', content: 'await input.initializePending();' },
        { name: 'connectToMicrophone', description: 'Gets microphone input using getUserMedia.', content: 'await input.connectToMicrophone();' },
        { name: 'cleanup', description: 'Stops audio and resets context.', content: 'input.cleanup();' }
      ]
    },
    {
      name: 'Analyzer Class',
      description: 'Performs FFT analysis using the Web Audio API.',
      content: 'analyzer.startAnalysis(audioContext, sourceNode);',
      methods: [
        { name: 'startAnalysis', description: 'Starts analyzing the input audio.', content: 'analyzer.startAnalysis(audioContext, sourceNode);' },
        { name: 'getFrequencyData', description: 'Gets current frequency data from audio.', content: 'const data = analyzer.getFrequencyData();' },
        { name: 'getTimeDomainData', description: 'Gets waveform data from audio.', content: 'const waveform = analyzer.getTimeDomainData();' }
      ]
    },
    {
      name: 'Visualizer Class',
      description: 'Draws visuals on the canvas using audio data.',
      content: 'Visualizer connects to the canvas and draws audio patterns.',
      methods: [
        { name: 'draw', description: 'Renders visuals on a canvas element.', content: 'visualizer.draw(canvas);' }
      ]
    },
    {
      name: 'Waviz Class',
      description: 'Combines Input, Analyzer, and Visualizer in one class.',
      content: 'const waviz = new Waviz(canvas, audioSource, audioContext);',
      methods: [
        { name: 'getFrequencyData', description: 'Safely gets frequency data from inside.', content: 'const data = waviz.getFrequencyData();' },
        { name: 'cleanup', description: 'Disconnects and resets audio system.', content: 'waviz.cleanup();' }
      ]
    },
    {
      name: 'Component Class',
      description: 'Provides reusable React components like <WaveViz />',
      content: '<WaveViz audioSource="file" />',
      methods: [
        { name: 'WaveComponent', description: 'A React component that visualizes waveform.', content: '<WaveViz audioSource="file" />' }
      ]
    }
  ];

  useEffect(() => {
    const bst = new BST();
    apiList.forEach((item) => {
      bst.insert(item.name, item);
      bst.insert(item.description, item);
      if (item.content) bst.insert(item.content, item);
      item.methods?.forEach((method) => {
        bst.insert(method.name, item);
        bst.insert(method.description, item);
        if (method.content) bst.insert(method.content, item);
      });
    });
    bstRef.current = bst;
    setFilteredApiList(apiList);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredApiList(apiList);
      return;
    }
    if (bstRef.current) {
      const results = bstRef.current.search(query);
      const deduped = BST.deduplicateResults(results);
      setFilteredApiList(deduped);
    }
  }, [query]);

  useEffect(() => {
    if (highlightedMethod) {
      const timer = setTimeout(() => {
        setHighlightedMethod(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedMethod]);

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
            {apiList.map((item, index) => {
              const isActive = filteredApiList.some((f) => f.name === item.name);
              return (
                <li key={item.name}>
                  <button
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => toggleSection(index)}
                  >
                    {item.name}
                  </button>
                  {expandedSection === index && (
                    <ul>
                      {(item.methods || []).map((method) => (
                        <li key={method.name}>
                          <a
                            href={`#${method.name.toLowerCase()}`}
                            onClick={() => setHighlightedMethod(method.name)}
                            className="method-link"
                          >
                            {method.name}
                          </a>

                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="docs-content">
          <section className="docs-section">
            <h2>Installation</h2>
            <p>Install Waviz via npm:</p>
            <pre className="code-block"><code>npm install waviz</code></pre>
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
                    <pre className="code-block"><code>{item.content}</code></pre>
                    {item.methods && item.methods.map((method) => (
                      <div
                        key={method.name}
                        id={method.name.toLowerCase()}
                        className={`method-block ${highlightedMethod === method.name ? 'highlight' : ''}`}
                      >
                        <h4>{method.name}</h4>
                        <p>{method.description}</p>
                        <pre className="code-block"><code>{method.content}</code></pre>
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
