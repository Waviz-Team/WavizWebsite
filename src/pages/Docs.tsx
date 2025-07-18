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
    description: `The Input class helps initialize an audio analyzer and identify different types of audio sources, such as microphone, files, or streams.

    It takes in two optional arguments: a callback and an audioContext.

    - The callback (tailored for an audio analyzer) must be initialized before using other methods.
    - The audioContext should only be passed if one has already been created. Otherwise, the Input class will create a default audioContext.
    - When using mediaStream methods, make sure to call them within an event listener tied to a user gesture (e.g., a click), to comply with browser CORS policies.`,
    content: '',
    methods: [
 {
  name: "connectAudioSource",
  description: `A router that takes in an audioSource and routes it to the appropriate manager.

Supported input types include:
- HTML Audio elements (HTMLAudioElement)
- Local File inputs
- URL/path strings to media files (string)
- Microphone ('microphone') — requires user permission
- Tab Audio ('screenAudio') — *Chromium only*, requires screen capture permission
- MediaStream input (via await mediaStream) — no sanity checks; for advanced use only`,
  content: `input.connectAudioSource(audioSource);`
},
  {
    name: "connectToAudioElement",
    description:
      "Handles audio from HTML audio elements, local files, and URL/path strings.",
    content: `input.connectToAudioElement(audioElement);`,
  },
  {
    name: "connectToMediaStream",
    description:
      "Handles MediaStream inputs such as microphone or tab audio streams.",
    content: `input.connectToMediaStream(mediaStream);`,
  },
  {
    name: "initializePending",
    description:
      "Waits for async user permission (e.g., microphone or screen audio). Prevents suspended audio context.",
    content: `await input.initializePending();`,
  },
  {
    name: "loadAudioFile",
    description:
      "Loads an audio file from an input event (e.g., file input). Routed to connectToAudioElement().",
    content: `input.loadAudioFile(event);`,
  },
  {
    name: "connectToAudioURL",
    description:
      "Connects to an audio file using a URL or path string. Routed to connectToAudioElement().",
    content: `input.connectToAudioURL("path/to/audio.mp3");`,
  },
  {
    name: "connectToHTMLElement",
    description:
      "Connects an existing HTML audio element to Web Audio API. Listens for 'play' to resume audio context.",
    content: `input.connectToHTMLElement(document.getElementById("myAudio"));`,
  },
  {
    name: "connectToMicrophone",
    description:
      "Accesses the user's microphone using getUserMedia. Routed from initializePending(). Supported by modern browsers.",
    content: `await input.connectToMicrophone();`,
  },
  {
    name: "connectToScreenAudio",
    description:
      "Captures audio from the current browser tab using getDisplayMedia. Only supported in Chromium browsers.",
    content: `await input.connectToScreenAudio();`,
  },
  {
    name: "getSourceNode",
    description: "Returns the current source node connected to Web Audio API.",
    content: `input.getSourceNode();`,
  },
  {
    name: "getAudioContext",
    description: "Returns the current audioContext being used.",
    content: `input.getAudioContext();`,
  },
  {
    name: "cleanup",
    description:
      "Disconnects and clears the current audio context. Requires reinitialization to reuse.",
    content: `input.cleanup();`,
  },
]
,
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
                      <div key={method.name}>
                        <h4 id={method.name.toLowerCase()}>{method.name}</h4>
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
