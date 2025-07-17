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
      description: 'The purpose of the Input class is to help initialize an audio analyzer as well as identify the different types of audio/signals. dles audio input from microphone, file, or stream.',
      content: `The Input Class takes in two optional arguments: a callback and an audioContext. The callback (tailored for an audio analyzer) must be initialized in order to use the other methods. The audioContext should only be passed if an audio context has already been set up. Otherwise, our Input class will create an audioContext by default for the user. If using mediaStream methods, make sure to call on them within an event listener tied to a user gesture to stay in line with CORS policy!
`,
      methods: [
  {
    name: "connectAudioSource",
    description:
      "Routes audio from various sources like HTML audio, file, URL, microphone, tab audio, or raw MediaStream.",
    content: `input.connectAudioSource(audioSource);`,
  },
  {
    name: "initializePending",
    description:
      "Awaits user permission for media input (e.g., microphone, tab audio). Prevents suspended audio context.",
    content: `await input.initializePending();`,
  },
  {
    name: "connectToAudioElement",
    description: "Handles HTML Audio, local files, and URL-based audio paths.",
    content: `input.connectToAudioElement(audioElement);`,
  },
  {
    name: "connectToMediaStream",
    description: "Handles audio from raw media streams like microphone or tab audio.",
    content: `input.connectToMediaStream(stream);`,
  },
  {
    name: "loadAudioFile",
    description: "Accepts a file input event and loads the file to the audio handler.",
    content: `input.loadAudioFile(event);`,
  },
  {
    name: "connectToAudioURL",
    description: "Takes in a string path to an audio file and connects it.",
    content: `input.connectToAudioURL("path/to/audio.mp3");`,
  },
  {
    name: "connectToHTMLElement",
    description: "Takes an existing HTML audio element and connects it to Web Audio API.",
    content: `input.connectToHTMLElement(document.getElementById("myAudio"));`,
  },
  {
    name: "connectToMicrophone",
    description: "Accesses user's microphone through getUserMedia.",
    content: `await input.connectToMicrophone();`,
  },
  {
    name: "connectToScreenAudio",
    description: "Grabs tab audio using getDisplayMedia. Only supported in Chromium browsers.",
    content: `await input.connectToScreenAudio();`,
  },
  {
    name: "getSourceNode",
    description: "Returns the current source node connected to Web Audio API.",
    content: `input.getSourceNode();`,
  },
  {
    name: "getAudioContext",
    description: "Returns the current audio context used.",
    content: `input.getAudioContext();`,
  },
  {
    name: "cleanup",
    description: "Disconnects and clears the audio context. Reinitialization required for reuse.",
    content: `input.cleanup();`,
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
