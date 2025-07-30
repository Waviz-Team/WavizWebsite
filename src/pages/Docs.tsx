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
  const [highlightedMethod, setHighlightedMethod] = useState<string | null>(
    null
  );

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
      description:
      'The Input class handles various types of audio input and prepares them for analysis. It accepts a callback (used to initialize a sourceNode) and an optional AudioContext. Supported sources include audio/video elements, local files, URLs, microphones, and screen audio.',

      content: `this.input = new Input((sourceNode) => {
                  this.setupAudioAnalysis(sourceNode);
                }, audioContext);`,

      methods: [
        {
          name: 'connectAudioSource',
          description: 'Routes the audio input to the right handler.',
          content: 'input.connectAudioSource(audioSource);',
        },
        {
          name: 'connectToAudioElement',
          description: 'Connects audio from an <audio> tag or file.',
          content: 'input.connectToAudioElement(audioElement);',
        },
        {
          name: 'connectToMediaStream',
          description: 'Handles input from microphone or screen audio.',
          content: 'input.connectToMediaStream(mediaStream);',
        },
        {
          name: 'initializePending',
          description: 'Waits for user permission before playing audio.',
          content: 'await input.initializePending();',
        },
        {
          name: 'connectToMicrophone',
          description: 'Gets microphone input using getUserMedia.',
          content: 'await input.connectToMicrophone();',
        },
        {
          name: 'cleanup',
          description: 'Stops audio and resets context.',
          content: 'input.cleanup();',
        },
        {
          name: 'loadAudioFile',
          description:
            'Takes in an event from an event handler and routes it to the audio element handler.',
          content: 'input.loadAudioFile(event);',
        },
        {
          name: 'connectToAudioURL',
          description:
            'Takes a string that points to a path/URL of an audio file.',
          content: "input.connectToAudioURL('path/to/audio.mp3');",
        },
        {
          name: 'connectToHTMLElement',
          description:
            "Connects an existing HTML audio/video element and attaches a 'play' event listener to resume audio context.",
          content: 'input.connectToHTMLElement(htmlElement);',
        },
        {
          name: 'connectToScreenAudio',
          description:
            'Sets up access to user tab audio using getDisplayMedia(). Only works on Chromium browsers.',
          content: 'await input.connectToScreenAudio();',
        },
        {
          name: 'getSourceNode',
          description:
            'Returns the currently used sourceNode for advanced audio control.',
          content: 'const node = input.getSourceNode();',
        },
        {
          name: 'getAudioContext',
          description: 'Returns the current audioContext in use.',
          content: 'const ctx = input.getAudioContext();',
        },
      ],
    },
    {
      name: 'Audio Analyzer Class',
      description:
      'The AudioAnalyzer class transforms audio input into frequency and time domain data using the Web Audio API. Use startAnalysis(audioContext, sourceNode) to begin analysis. Then retrieve data with getFrequencyData() or getTimeDomainData().',

      content: `const analyzer = new AudioAnalyzer();
                analyzer.startAnalysis(audioContext, sourceNode);`,

      methods: [
        {
          name: 'startAnalysis',
          description: 'Starts analyzing the input audio.',
          content: 'analyzer.startAnalysis(audioContext, sourceNode);',
        },
        {
          name: 'getFrequencyData',
          description: 'Gets current frequency data from audio.',
          content: 'const data = analyzer.getFrequencyData();',
        },
        {
          name: 'getTimeDomainData',
          description: 'Gets waveform data from audio.',
          content: 'const waveform = analyzer.getTimeDomainData();',
        },
        {
          name: 'getDataArray',
          description:
            'Grabs the raw frequency data as an 8-bit unsigned integer array.',
          content: 'analyzer.getDataArray();',
        },
        {
          name: 'getBufferLength',
          description: 'Returns the frequency bin count (half the fftSize).',
          content: 'analyzer.getBufferLength();',
        },
        {
          name: 'timeData',
          description:
            'Getter: Returns live time domain data (same as getTimeDomainData).',
          content: 'analyzer.timeData',
        },
        {
          name: 'freqData',
          description:
            'Getter: Returns live frequency data (same as getFrequencyData).',
          content: 'analyzer.freqData',
        },
      ],
    },
    {
      name: 'Waviz Visualizer Class',
      description:
      'The Visualizer class renders real-time audio data to a canvas element. It supports multiple visualization types such as lines, bars, dots, and particles, and works with both time and frequency domain data. Colors, gradients, and styles can be customized.',
      content: `const visualizer = new Visualizer(canvas, analyzer);
      visualizer.simpleLine('#3498db');`,

      methods: [
        {
          name: 'render',
          description:
            'Starts visualization rendering on the canvas. Trigger inside a user gesture.',
          content: `audio.addEventListener('play', () => {
            viz.visualizer.render();
          });`,

        },
        {
          name: 'stop',
          description:
            'Stops rendering to save resources. Ideal for finite audio sources.',
          content: `audio.addEventListener('pause', () => {
            viz.stop();
          });`,

        },
        {
          name: 'Options Overview',
          description:
            'Accepts config objects for customizing visuals. Includes domain, coord, viz, color, style.',
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
            'Sets input type: "time" (waveform) or "freq" (FFT). Adjust amplitude and frequency range.',
          content: `domain: ['freq', 100, 1024]`,

        },
        {
          name: 'coord',
          description:
            'Controls layout system: "rect" (Cartesian) or "polar" (circular). Optional radius for polar.',
          content: `coord: ['polar', 100]`,

        },
        {
          name: 'viz',
          description:
            'Defines visual type: "line", "bars", "polarBars", "dots", or "particles".',
          content: `viz: ['bars', 8]`,

        },
        {
          name: 'color',
          description:
            'Sets color mode: solid, linearGradient, radialGradient, randomColor, or randomPalette.',
          content: `color: ['linearGradient', 'red', 'blue']`,

        },
        {
          name: 'style',
          description:
            'Controls stroke width and fill options. (Feature in development)',
          content: `style: [2]`,

        },
      ],
    },
    {
      name: 'Waviz Class',
      description:
      'The Waviz class is a high-level wrapper that combines Input, Analyzer, and Visualizer into one interface. It simplifies audio visualization setup. Pass in a canvas and audio source to get started. Supports optional audioContext.',

      content: `const waviz = new Waviz(canvas, audio);
                audio.addEventListener('play', async () => {
                  await waviz.input.initializePending();
                  waviz.visualizer.simpleBars();
                });`,

      methods: [
        {
          name: 'getFrequencyData',
          description:
            'Returns frequency domain data from AudioAnalyzer with safety checks.',
          content: `const data = waviz.getFrequencyData();`,

        },
        {
          name: 'getTimeDomainData',
          description:
            'Returns time domain data from AudioAnalyzer with safety checks.',
          content: `const data = waviz.getTimeDomainData();`,

        },
        {
          name: 'cleanup',
          description:
            'Delegates cleanup from Input class, disconnects sourceNode and releases the AudioContext safely.',
          content: `waviz.cleanup();`,

        },
        {
          name: 'wave',
          description:
            'Convenience method to render a waveform visualizer. Trigger via user gesture.',
          content: `audio.addEventListener('play', () => {
                    waviz.wave({
                      coord: ['rect'],
                      viz: ['line', 512],
                      color: ['linearGradient', 'red', 'blue']
                    });
                  });`,

        },
        {
          name: 'bar',
          description:
            'Convenience method to render a bar visualizer. Trigger via user gesture.',
          content: `audio.addEventListener('play', () => {
                    waviz.bar({
                      coord: ['rect'],
                      viz: ['bars', 16],
                      color: ['radialGradient', 'orange', 'yellow']
                    });
                  });`,

        },
      ],
    },
    {
      name: 'WaveViz Component',
      description:
      'Plug & Play React components for visualizing audio. Pass an audio ref or MediaStream source to quickly integrate waveform, bar, dot, or particle visualizations. Presets like Bars1–6 and Dots1–4 are supported.',

      content: `<Mixed3 srcAudio={audioRef} srcCanvas={canvasRef} />`,
      methods: [
    {
      name: 'Bars',
      description: 'Displays vertical bar visualizations. 6 presets available (Bars1–6).',
      content: '<Bars2 srcAudio={audioRef} />',
    },
    {
      name: 'Waves',
      description: 'Shows animated waveform visuals. 7 presets available (Waves1–7).',
      content: '<Waves3 srcAudio={audioRef} />',
    },
    {
      name: 'Dots',
      description: 'Displays dot-based visuals synced to waveform. 4 presets (Dots1–4).',
      content: '<Dots1 srcAudio={audioRef} />',
    },
    {
      name: 'Particles',
      description: 'Renders reactive particle effects. 1 preset (Particles1).',
      content: '<Particles1 srcAudio={audioRef} />',
    },
    {
      name: 'Mixed',
      description: 'Combines multiple visual styles into one flexible preset.',
      content: '<Mixed3 srcAudio={audioRef} srcCanvas={canvasRef} />',
    },
  ],
    },
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
    <div className='docs-page'>
      <header className='docs-header'>
        <img src='/assets/logos/coreDark.svg' height='100rem' />
        <h2>Documentation</h2>
        <br></br>
        <p>Learn how to use Waviz for real-time audio visualization.</p>
      </header>

      <section className='docs-search'>
        <input
          type='text'
          placeholder='Search documentation...'
          className='search-input'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <div className='docs-container'>
        <aside className='docs-sidebar'>
          <ul>
            {apiList.map((item, index) => {
              const isActive = filteredApiList.some(
                (f) => f.name === item.name
              );
              return (
                <li key={item.name}>
                  <button
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => toggleSection(index)}>
                    {item.name}
                  </button>
                  {expandedSection === index && (
                    <ul>
                      {(item.methods || []).map((method) => (
                        <li key={method.name}>
                          <a
                            href={`#${method.name.toLowerCase()}`}
                            onClick={() => setHighlightedMethod(method.name)}
                            className='method-link'>
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

          <button
            className='scroll-to-top'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to Top
          </button>
        </aside>

        <main className='docs-content'>
          <section className='docs-section'>
            <h2>Installation</h2>
            <p>Install Waviz via npm:</p>
            <div className='codeBlockCopy'>
              <code>
                npm install waviz
                <a
                  onClick={() => navigator.clipboard.writeText('npm install waviz')}
                  className='copyCode'>
                  copy
                </a>
              </code>
            </div>
          </section>

          <section className='docs-section'>
            <h2>Getting Started</h2>
            <p>Waviz renders real-time audio visualizations in web apps.</p>
          </section>

          <section className='docs-section'>
            <h2>API Overview</h2>
            {filteredApiList.length > 0 ? (
              <ul>
                {filteredApiList.map((item) => (
            <li key={item.name} className='api-item'>
              <h3 id={item.name.toLowerCase()}>{item.name}</h3>
              <p>{item.description}</p>

              {item.content && (
                <div className='codeBlockCopy'>
                  <code>
                    {item.content}             
                    <a
                      onClick={() =>
                        navigator.clipboard.writeText(item.content || '')
                      }
                      className='copyCode'>
                      copy
                    </a>
                  </code>
                </div>
              )}

              {item.methods &&
                item.methods.map((method) => (
                  <div
                    key={method.name}
                    id={method.name.toLowerCase()}
                    className={`method-block ${
                      highlightedMethod === method.name ? 'highlight' : ''
                    }`}>
                    <h4>{method.name}</h4>
                    <p>{method.description}</p>
                    <div className='codeBlockCopy'>
                      <code>
                        {method.content}
                        <a
                          onClick={() =>
                            navigator.clipboard.writeText(method.content || '')
                          }
                          className='copyCode'>
                          copy
                        </a>
                      </code>
                    </div>
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
