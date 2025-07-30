import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { BST } from '../components/bst';

export default function Docs() {
  // User's search input
  const [query, setQuery] = useState('');

  // Filtered API data based on search input
  const [filteredApiList, setFilteredApiList] = useState<any[]>([]);

  // Currently expanded section in sidebar
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Method name currently highlighted (for smooth UX)
  const [highlightedMethod, setHighlightedMethod] = useState<string | null>(null);

  // BST instance for search
  const bstRef = useRef<BST | null>(null);

  // Toggle open/collapse for sidebar section
  const toggleSection = (index: number) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };

  // Documentation content (section-level and method-level info)
  const apiList = [
    {
      name: 'Input Class',
      description: 'The Input class helps initialize The purpose of the Input class is to help initialize an audio analyzer as well as identify the different types of audio/signals. The Input Class takes in two optional argument: a callback and an audioContext. The callback (tailored for an audio analyzer) must be initialized in order to use the other methods. The audioContext should only be passed if an audio context has already been set up. Otherwise, our Input class will create an audioContext by default for the user. audio sources.',
      content: '',
      methods: [
        { name: 'connectAudioSource', description: 'Routes the audio input to the right handler.', content: 'input.connectAudioSource(audioSource);' },
        { name: 'connectToAudioElement', description: 'Connects audio from an <audio> tag or file.', content: 'input.connectToAudioElement(audioElement);' },
        { name: 'connectToMediaStream', description: 'Handles input from microphone or screen audio.', content: 'input.connectToMediaStream(mediaStream);' },
        { name: 'initializePending', description: 'Waits for user permission before playing audio.', content: 'await input.initializePending();' },
        { name: 'connectToMicrophone', description: 'Gets microphone input using getUserMedia.', content: 'await input.connectToMicrophone();' },
        { name: 'cleanup', description: 'Stops audio and resets context.', content: 'input.cleanup();' },
        { name: 'loadAudioFile', description: 'Takes in an event from an event handler and routes it to the audio element handler.', content: 'input.loadAudioFile(event);' },
        { name: 'connectToAudioURL', description: 'Takes a string that points to a path/URL of an audio file.', content: 'input.connectToAudioURL(\'path/to/audio.mp3\');' },
        { name: 'connectToHTMLElement', description: 'Connects an existing HTML audio/video element and attaches a \'play\' event listener to resume audio context.', content: 'input.connectToHTMLElement(htmlElement);' },
        { name: 'connectToScreenAudio', description: 'Sets up access to user tab audio using getDisplayMedia(). Only works on Chromium browsers.', content: 'await input.connectToScreenAudio();' },
        { name: 'getSourceNode', description: 'Returns the currently used sourceNode for advanced audio control.', content: 'const node = input.getSourceNode();' },
        { name: 'getAudioContext', description: 'Returns the current audioContext in use.', content: 'const ctx = input.getAudioContext();' }
      ]
    },
    {
      name: 'Audio Analyzer Class',
      description: 'PThe purpose of the analyzer class is to provide an in-house analyzer for audio data while maintaining a clear separation of concerns. The analyzer uses methods pre-defined on webAudio API to conduct Fourier transformations on a given audio context. startAnalysis takes two mandatory arguments: audioContext and sourceNode. sourceNode must be an AudioNode that we can connect to in order to run the analysis.erforms FFT analysis using the Web Audio API.',
      content: 'analyzer.startAnalysis(audioContext, sourceNode);',
      methods: [
        { name: 'startAnalysis', description: 'Starts analyzing the input audio.', content: 'analyzer.startAnalysis(audioContext, sourceNode);' },
        { name: 'getFrequencyData', description: 'Gets current frequency data from audio.', content: 'const data = analyzer.getFrequencyData();' },
        { name: 'getTimeDomainData', description: 'Gets waveform data from audio.', content: 'const waveform = analyzer.getTimeDomainData();' },
        { name: 'getDataArray', description: 'Grabs the raw frequency data as an 8-bit unsigned integer array.', content: 'analyzer.getDataArray();' },
        { name: 'getBufferLength', description: 'Returns the frequency bin count (half the fftSize).', content: 'analyzer.getBufferLength();' },
        { name: 'timeData', description: 'Getter: Returns live time domain data (same as getTimeDomainData).', content: 'analyzer.timeData' },
        { name: 'freqData', description: 'Getter: Returns live frequency data (same as getFrequencyData).', content: 'analyzer.freqData' }

      ]
    },
    {
      name: 'Waviz Visualizer Class',
      description: 'The Waviz Visualizer class handles the canvas rendering system for various real-time audio visualization types. It provides the .render() method to start drawing, as well as support for custom visual types, coordinate systems, color modes, and layering multiple effects simultaneously.raws visuals on the canvas using audio data. To implement the Waviz visualizer, create a new instance of `Waviz` by passing in an HTML `<canvas>` element and an audio source element:',
      content: 'const viz = new Waviz(canvas, audio);',
      methods: [
      {
        name: 'render',
        description:
          'Starts the visualization rendering on the canvas using provided config or array of configs.',
        content: `// Basic usage
viz.visualizer.render();

// Recommended inside a user gesture (like play)
audio.addEventListener('play', () => {
  viz.visualizer.render();
});`,
      },
      {
        name: 'stop',
        description:
          'Stops the visualization rendering to conserve resources (especially for finite audio sources).',
        content: `// Manually stop the visualizer
viz.stop();

// Recommended for finite sources like audio/video
audio.addEventListener('pause', () => {
  viz.stop();
});`,
      },
      {
    name: 'Options Overview',
    description:
      'The Waviz visualizer accepts a config object or array of config objects to control visualization layers. Each object may include: domain, coord, viz, color, style.',
    content: `{
  domain: [],
  coord: [],
  viz: [],
  color: [],
  style: [],
}`,
  },
  {
    name: 'domain',
    description:
      'Controls the type and shape of audio data input. Use "time" for waveform or "freq" for FFT frequency data. Also supports amplitude and range.',
    content: `
\`\`\`ts
domain: [<domainType>, <amplitude>, <range>]
\`\`\`

- \`<domainType>\`: 'time' *(default)* or 'freq'
  - 'time' → Original waveform (TimeDomain).
  - 'freq' → Frequency data via FFT.

- \`<amplitude>\` (default: \`100\`): Controls waveform height/intensity.

- \`<range>\` (default: \`1024\`): Trims high-end frequencies.
`
  },
  {
    name: 'coord',
    description:
      'Controls the coordinate system. Choose "rect" for Cartesian or "polar" for circular layout. Polar supports optional radius.',
    content: `// Set coordinate system and optional radius
coord: [<coordinateSystem>, <radius?>]

// Example usage:
coord: ['polar', 100]

// Options:
// <coordinateSystem>: 'rect' (default) or 'polar'
// <radius> (only for 'polar'): controls circular radius (default: 100)
`,
  },
  {
    name: 'viz',
    description:
      'Defines the visual shape. Supported values include: line, bars, polarBars, dots, particles.',
    content: `// Controls what type of visual to render
viz: [<visualizationType>, <...params>]

// Available types:

// 1. 'line' (default)
// Draws waveform line
viz: ['line', 1024] // sampling (default: 1024)

// 2. 'bars'
// Draws vertical bars
viz: ['bars', 8] // number of bars (default: 8)
// ⚠️ Not compatible with 'polar' coord

// 3. 'polarBars' (beta)
// Draws circular bars
viz: ['polarBars']
// 🚧 Experimental

// 4. 'dots'
// Animated dots
viz: ['dots', 100] // number of dots (default: 100)

// 5. 'particles'
// Spawns reactive particles
viz: ['particles', [1,1], 1, Infinity, 1, 100]
// [velocity], gravity, lifespan, birthrate, sampling
`,
  },
  {
    name: 'color',
    description:
      'Sets the visual color. Can be a solid color, linearGradient, radialGradient, randomColor, or randomPalette.',
    content: `// Controls color mode of the visualizer
color: [<colorMode>, <...args>]

// Available modes:

// 1. Solid color
color: ['red']
color: ['#23AB87']

// 2. Linear gradient (top to bottom)
color: ['linearGradient', 'red', 'blue']

// 3. Radial gradient (center-out)
color: ['radialGradient', 'red', 'blue']

// 4. Random color (changes every frame)
color: ['randomColor']

// 5. Random palette (selects from custom list every frame)
color: ['randomPalette', ['red', 'green', 'blue']]
`,
  },
  {
    name: 'style',
    description:
      'Controls stroke width, fill, and dash styles (feature under development).',
    content: `// [🚧 TODO]
// style: [<strokeWidth>, <fillStyle?>, <dashPattern?>]

// Example:
style: [2] // stroke width 2px
`,
  },
    ],
    },
    {
      name: 'Waviz Class',
      description: `The Waviz class acts as a high-level wrapper that combines the three core modules—Input, Analyzer, and Visualizer—into a single, unified interface. It offers a simple and effective way to create an audio visualizer without the need for a React component.

You can optionally pass the following arguments when instantiating the class:

- canvas (HTMLCanvasElement): The canvas on which the visualization will be rendered. Required if you plan to display visuals.
- audioSource (as defined in Input.connectAudioSource()): An audio input element, required to route audio into the visualizer.
- audioContext (AudioContext, optional): An optional AudioContext instance. Useful when managing multiple visualizers on the same page.

All three arguments are optional during instantiation, but canvas and audioSource are required to start the visualizer. When these are provided, the class automatically initializes the necessary components, including the audio context.`,
      content: 'const waviz = new Waviz(canvas, audioSource, audioContext);',
      methods: [
        {
    name: "getFrequencyData",
    description: "Returns frequency domain data from AudioAnalyzer with safety checks.",
    content: `// Get frequency data (Uint8Array)
const data = waviz.getFrequencyData();
// Useful for bar or particle visualizations`
  },
  {
    name: "getTimeDomainData",
    description: "Returns time domain data from AudioAnalyzer with safety checks.",
    content: `// Get waveform time-domain data (Uint8Array)
const data = waviz.getTimeDomainData();
// Useful for waveform or dots visualizations`
  },
  {
    name: "cleanup",
    description: "Delegates cleanup from Input class, disconnects sourceNode and releases the AudioContext safely.",
    content: `// Clean up audio context and disconnect input
waviz.cleanup();`
  },
  {
    name: "wave",
    description: "Convenience method to render a waveform visualizer. Trigger via user gesture.",
    content: `// Render waveform with default or custom options
waviz.wave(); // uses defaults

// With custom options
waviz.wave({
  coord: ['rect'],
  viz: ['line', 512],
  color: ['linearGradient', 'red', 'blue']
});

// Recommended inside a gesture event:
audio.addEventListener('play', () => {
  waviz.wave();
});`
  },
  {
    name: "bar",
    description: "Convenience method to render a bar visualizer. Trigger via user gesture.",
    content: `// Render bars with default or custom options
waviz.bar(); // uses defaults

// With custom options
waviz.bar({
  coord: ['rect'],
  viz: ['bars', 16],
  color: ['radialGradient', 'orange', 'yellow']
});

// Recommended inside a gesture event:
audio.addEventListener('play', () => {
  waviz.bar();
});`
  }
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

  // On component mount: construct the BST from all searchable fields
 useEffect(() => {
    const bst = new BST();

    apiList.forEach((item) => {
      // Section-level inserts with prefixes
      bst.insert(`class:${item.name}`, item);
      bst.insert(`desc:${item.description}`, item);
      if (item.content) bst.insert(`code:${item.content}`, item);

      // Method-level inserts with prefixes
      item.methods?.forEach((method) => {
        bst.insert(`method:${method.name}`, item);
        bst.insert(`desc:${method.description}`, item);
        if (method.content) bst.insert(`code:${method.content}`, item);
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
        <img src="/assets/logos/coreDark.svg" height='100rem'/>
        <h2>Documentation</h2>
        <br></br>
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

          <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to Top
          </button>
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
                        <pre className="code-block">
                          <code>{method.content}</code>
                          <button
                            className="copy-button"
                            onClick={() => navigator.clipboard.writeText(method.content || '')}
                          >
                            Copy
                          </button>
                        </pre>

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