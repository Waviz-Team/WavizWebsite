import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

export default function Docs() {
  const [query, setQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };
  
  const normalizedQuery = query.toLowerCase().trim();
  const firstMatchRef = useRef<HTMLHeadingElement | null>(null);
useEffect(() => {
  if (!normalizedQuery) return;

  const timeout = setTimeout(() => {
    if (firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, 300); // 300ms debounce delay

  return () => clearTimeout(timeout); // Cleanup if user types again quickly
}, [normalizedQuery]);

  const apiList = [
    {
    name: 'Input Class',
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
      name: 'Analyzer Class',
      description: `The AudioAnalyzer class provides an in-house analyzer for audio data while maintaining clear separation of concerns. It uses the Web Audio API to run Fourier transformations on a given audio context. The core method, startAnalysis, takes two required arguments:

      - audioContext (AudioContext): The audio environment
      - sourceNode (AudioNode): The audio source to analyze

      startAnalysis creates an analyser node and begins FFT (Fast Fourier Transform) analysis. Default fftSize is 2048. A future update will allow users to change fftSize dynamically.`,
      content: `analyzer.startAnalysis(audioContext, sourceNode);`,
      methods: [ 
           {
      name: 'startAnalysis',
      description:
        'The primary method of the audioAnalyzer class. It will run a Fourier analysis on the audioContext using .createAnalyser() defined by WebAudioApi. By default, it will take a fftSize of 2048. Future Update: Allow users to dynamically change fftSize!',
      content: 'analyzer.startAnalysis(audioContext, sourceNode);',
    },

      {
        name: 'getFrequencyData',
        description: ' allows users/functions to pull the array of frequency data mapped by FFT in bins to access. The array will be of type 8-bit unsigned integers with an array length of 1/2 the fftSize.',
        content: 'const data = analyzer.getFrequencyData();',
      },
        {
      name: 'getTimeDomainData',
      description:
        'allows users/functions to pull the array of time mapped data by FFT in bins to access. The array will be of type 8-bit unsigned integers with an array length of 1/2 the fftSize.',
      content: 'const waveform = analyzer.getTimeDomainData();',
    },
    {
      name: 'getDataArray',
      description:
        'Allows users/functions to grab the raw freq data in type 8-bit unsigned integers.',
      content: 'const rawData = analyzer.getDataArray();',
    },
    {
      name: 'getBufferLength',
      description:
        'This will output the frequency bin count as a number, which will be 1/2 the fftSize.',
      content: 'const bins = analyzer.getBufferLength();',
    },
    {
      name: ' get timeData ()',
      description:
        'A getter function that outputs the same result as getTimeDomainData(). This is here in case users want to access live data via a getter function instead.',
      content: 'const waveform = analyzer.timeData;',
    },
    {
      name: 'get freqData ()',
      description:
        'A getter function that outputs the same result as getFrequencyData(). This is here in case users want to access live data via a getter function instead.',
      content: 'const spectrum = analyzer.freqData;',
    },

      ],
    },
    {
      name: 'Visualizer Class',
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
  name: 'Waviz Class',
  description: `The purpose of the Waviz class is to provide a wrapper class for all the modularized classes we have defined below (input, analyzer, visualizer) through class composition. If you want a simple, effective way to create a visualizer that isn't a react component, use this class! The Waviz class takes in 3 optional arguments:

- canvas: type should be an HTML Canvas Element. We need a provided user canvas to draw our visualizer on!
- audioSource: type will be the same type defined in the Input class .connectAudioSource() below. This is necessary as well if you want to start the visualizer!
- audioContext:  type will be an AudioContext. This is the currently the only optional parameter that is not needed to start the visualizer. However, if an audioContext has already been established and you don't want to duplicate audioContext (you probably shouldn't), then you can pass in your already existing audioContext. This is also helpful in the case you want to create multiple visualizers on the same page. All 3 arguments are not needed to initialize the class. However, the first two (canvas, audioSource) should be passed in if you want to start the visualizer. Using these arguments, the Waviz class will auto initialize the visualizer/audioContext for you.`,
  content: `const waviz = new Waviz(canvas, audioSource, audioContext);`,
  methods: [
    {
      name: 'getFrequencyData',
      description:
        'A delegator method that pulls the frequency data while providing sanity checks. For more details, refer to our audioAnalyzer documentation!',
      content: 'const data = waviz.getFrequencyData();',
    },
    {
      name: 'getTimeDomainData',
      description:
        'A delegator method that pulls the time domain data while providing sanity checks. For more details, refer to our audioAnalyzer documentation!',
      content: 'const waveform = waviz.getTimeDomainData();',
    },
    {
      name: 'cleanup',
      description:
        'Delegates to Input.cleanup(). Safely disconnects the audio context and clears connections.',
      content: 'waviz.cleanup();',
    },
    {
      name: 'wave',
      description:
        'Convenience method for drawing waveforms. Takes in the optional arguments of options (for the full list of options, refer to the visualizer documentation!). This will initialize the wave visualizer for you. If using mediaStream inputs, make sure to call within an event listener, tied to a user gesture, in order to comply with browser autoplay and permission policies!',
    },
    {
      name: 'bar',
      description:
        'Convenience method for drawing bar visualizations. takes in the optional arguments of options (for the full list of options, refer to the visualizer documentation!). This will initialize the bar visualizer for you. If using mediaStream inputs, make sure to call within an event listener, tied to a user gesture, in order to comply with browser autoplay and permission policies!',

      content: 'waviz.bar({ barWidth: 4, numBars: 128 });',
    },
  ],
},
    {
      name: 'Component Class',
      description: 'Reusable visual modules for custom integration.',
      content: `Component provides React components like <WaveViz />`,
      methods: [
        {
          name: 'WaveComponent',
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
  console.log(filteredApiList)

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
            <ul>
              {apiList.map((item) => {

                const classMatches =
                  item.name.toLowerCase().includes(normalizedQuery) ||
                  item.description.toLowerCase().includes(normalizedQuery) ||
                  item.content.toLowerCase().includes(normalizedQuery);

                // Check if any method inside the class matches
                const methodMatches = (item.methods || []).some((method) =>
                  method.name.toLowerCase().includes(normalizedQuery) ||
                  method.description.toLowerCase().includes(normalizedQuery) 
                );

                const isMatch = normalizedQuery && (classMatches || methodMatches);

                return (
                  <li key={item.name} className="api-item">
                    <h3
                      id={item.name.toLowerCase()}
                      ref={isMatch && firstMatchRef.current === null ? firstMatchRef : null}
                    >
                      {item.name}
                    </h3>
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
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}


//  <p style={{ color: '#888' }}>No results found.</p>