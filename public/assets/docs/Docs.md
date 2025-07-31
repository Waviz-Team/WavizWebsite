

Waviz is a modern, modular React library for audio and signal visualization. Designed to fill the gap left by outdated or deprecated alternatives, Waviz helps developers build beautiful, customizable sound visualizations with ease.

## Overview

Waviz provides Plug-and-Play React components for audio visualization, including waveform and bar visualizers. Whether you’re building a music player, educational app, or audio signal monitor, Waviz gives you the tools to integrate dynamic visuals quickly and cleanly.

For developers who want more control, Waviz Core provides low-level access to the underlying architecture—allowing you to build custom visualizations and components tailored to your specific needs.

## Architecture

Waviz uses a modular architecture with single-responsibility function nodes:

- Clean separation of concerns
- Easy to extend and maintain
- Built for composability

# Installation

Waviz is available from [npm](https://www.npmjs.com/package/waviz) using:

```
npm i waviz
```

## Library

Waviz has two primary libraries:

- [Waviz Core](#waviz-core)
- [Plug n Play](#plug--play-react-components)

![Waviz Library](/assets/docs/assets/WavizLibraries.png)

If you want a simple plug-in and to use React Components, go to our [Plug-n-Play React Components section](#plug--play-react-components). Plug-n-Play uses the Waviz Core Library to generate presets.

If you want to have more control over what you build, go to our [Waviz Core Section](#waviz-core). Waviz Core uses Web Audio API and HTML Canvas to generate a visualizer.

For a more in-depth documentation, visit our website: [www.wavizJS.com](www.wavizJS.com)

### Waviz Core

Waviz Core has 3 primitive classes:

- [Input](#input-class)
- [Analyzer](#analyzer-class)
- [Visualizer](#visualizer-class)

While they are designed to work together, each of these classes can be used independently. The basic flow of data is: Input -> Analyzer -> Visualizer.

![coreStructure](/assets/docs/assets/CoreStructure.png)

If you want to use all three classes in tandem, we have a composition class 'Waviz' that you can initialize.

#### Waviz Class

The Waviz class is the 'wrapper' class that uses all three primitive classes to initialize a visualizer. This is the recommended class to get started if you are using the Core Library.

The Waviz class takes in three arguments:

- HTML Canvas element
- Audio Source
- Audio Context

While all three arguments are optional, an Audio Source and a HTMLCanvas are the bare minimum needed to initialize a visualizer. The Audio Source argument should only be passed in if you have already established an AudioContext.

To get started, import waviz from the waviz/core library and initialize the waviz class by passing in an Audio Source and a HTML Canvas element:

```ts
import Waviz from 'waviz/core'; // You can use require if you prefer commonJS
const myWaviz = new Waviz(canvas, audio);
```

From here, you can call your visualizer within a relevant event listener. Due to browser protection policies, you cannot initialize a visualizer without tying it to a user gesture.

_Note: the code below is a convenience method on our visualizer class._

```ts
myWaviz.visualizer.simpleBars();
```

If you are using a media stream element (microphone, tab audio, etc), you need to also initialize the pending method. This will ensure that the visualizer waits for user permissions before continuing forward. It is recommended that regardless of what input element you are using, you always initialize pending. This will be an async call, so make sure you call this within an asynchronous function.

```ts
await myWaviz.input.initializePending();
```

The recommended initialization should look like so:

```tsx
const myWaviz = new Waviz(canvas, audio);

audio.addEventListener('play', async () => {
  await myWaviz.input.initializePending();
  myWaviz.visualizer.simpleBars();
});

audio.addEventListener('pause', () => {
  myWaviz.visualizer.stop();
});
```

_Warning: The above initialization will only work in vanilla JS if you are using a build tools. If you want to use Waviz core using direct browser read, (or would like to use it in tandem with React) refer to our [Waviz Core usage notes](#waviz-core-usage-notes)._

For more information on the convenience methods and the API calls contained within the Waviz composition class, refer to our [API section](#waviz-composition-api).

#### Input Class

The Input class handles the 'preparation' of the audio inputs you would like to use. It takes in a callback function (to initialize source nodes) and an optional AudioContext. The current supported inputs are:

- HTML Audio elements
- HTML Video elements
- Local File inputs
- URL/path strings to media files
- Microphone (defined by 'microphone')
- Tab Audio (defined by 'screenAudio')

An example initialization of the input class will look like such:

```ts
const input = new Input((sourceNode) => {
  // Setup your analyzer or other logic here
  analyzer.startAnalysis(audioContext, sourceNode);
}, audioContext);
```

For a more detailed description of the support inputs and its associated methods, refer to the [Input API section](#input-api).

#### Analyzer Class

The Analyzer class is the primary handler for transforming an input into readable frequency data. The analyzer class does not take in any arguments; however, it needs to be initiated via the 'startAnalysis' method - a function that takes in an AudioContext and a sourceNode.

```ts
const testAnalyzer = new AudioAnalyzer();
testAnalyzer.startAnalysis(audioContext, sourceNode);
```

Once an analysis has been started, you can grab the frequency domain data or time domain data using the getFrequencyData and getTimeDomainData methods.

```ts
const frequencyData = analyzer.getFrequencyData();
const timeDomainData = analyzer.getTimeDomainData();
```

Refer to the [Analyzer API section](#analyzer-api) for the full list of api methods.

#### Visualizer Class

The visualizer class is the engine of our visualization. It draws 2d visualizations by taking in a HTML Canvas Element and a Uint8Array (or our audioAnalyzer instance).

**Key Features:**

- Supports multiple visualization types: lines, bars, dots, particles, and more
- Works with both time and frequency domain data
- Customizable colors, gradients, and styles

**Basic Usage:**

```ts
import { Waviz } from 'waviz';

const canvas = document.getElementById('canvas');
const audio = document.getElementById('audio');

const myWaviz = new Waviz(canvas, audio);

audio.addEventListener('play', async () => {
  myWaviz.simpleLine('#3498db'); // Draws a simple blue waveform line
});
```

For more advanced options and layering, see the [Visualizer API Reference](#visualizer-api).

## Plug & Play React Components

Waviz offers easy-to-use, plug-and-play React components for rapid integration of audio visualizations into your React applications.

**Key Features:**

- Simple React props API—just provide an audio source and (optionally) a canvas ref
- Supports multiple visualization types and presets
- Fully compatible with React functional components and hooks

**Basic Usage:**

To use, make sure you establish a useRef( ) for the audio. The canvas useRef ( ) can be optional but for the most control over the size, it is recommended that you create a canvas that will be passed down.

```tsx
import React, { useRef } from 'react';
import { Mixed3 } from 'waviz';

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <Mixed3 srcAudio={audioRef} srcCanvas={canvasRef} />
      <canvas ref={canvasRef} width={400} height={400}></canvas>
      <audio ref={audioRef} src='/your-audio-file.mp3' controls />
    </div>
  );
}
```

Just like from the Input class, you can also initialize the visualizer using mediaStream inputs instead. You would set the useRef directly at the top instead of assigning it to the audio.

```ts
const audioRef = useRef('screenAudio');
```

**Available Components:**

- **Bars** - 6 different presets of Bar visualization
- **Waves** - 7 different presets of Wave visualization
- **Dots** - 4 different presets of Dots visualization
- **Particles** - 1 preset using Particle visualization
- **Mixed** – 11 mixed presets of different visualizations

More component presets will be added in the future! Each component is organized via a number system. For instance for Dots, the imports for each would be as such:

```tsx
import { Dots1 } from 'waviz';
import { Dots2 } from 'waviz';
import { Dots3 } from 'waviz';
import { Dots4 } from 'waviz';
```

## Waviz Core usage notes

_If you are using ECMA script to import, make sure you add in type="module" into your script!_

If you want to run Waviz Core directly in a browser, you need to configure your file structure to read a UMD file. **These notes assume you are using a Linux terminal and nodeJS.** After NPM installation, on your terminal, you will run:

```
mkdir -p libs
```

This will make a parent directly for the library in which the umd file will be stored. If you already have a libs folder, you can skip this step.

Next, you will run:

```
cp node_modules/waviz/dist/waviz.umd.js libs/
```

This will move the UMD file into the libs folder.

You can then import waviz core from this UMD file! Below is an example of how this import would look like for native browser running.

**HTML File:**

```tsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WavizHTMLTest</title>
  </head>
  <body>
      <canvas id="canvas" width="800" height="400"></canvas>
      <audio id="audio" src="/CoolMusic.mp3" controls></audio>
      <script src="libs/waviz.umd.js"></script>
      <script type="module" src="index.js"></script>
  </body>
</html>

```

**Index.js script file:**

```tsx
const Waviz = window.Waviz.default;

const canvas = document.getElementById('canvas');
const audio = document.getElementById('audio');

const wavizTest = new Waviz(canvas, audio);

audio.addEventListener('play', async () => {
  wavizTest.visualizer.simpleBars();
});

audio.addEventListener('pause', () => {
  wavizTest.visualizer.stop();
});
```

If you want to use the Waviz Core library within React, the steps will be similar to [Waviz Core](#waviz-core). Just make sure that your import call is calling on Waviz (as if you were calling our Plug n Play Library) instead of waviz/core.

```
import Waviz from 'waviz'
```

## Waviz Composition API

### Core Methods

**setupAudioAnalysis( ):** This method is called in our constructor once Waviz is initialized. If an Audio Context is provided, it will use the existing audioContext instead of initializing a new Audio Context.

### Delegator Methods

**getFrequencyData( ):** This method is delegated from AudioAnalyzer. Allows you to call waviz.getFrequencyData( ) instead of waviz.analyzer.getFrequencyData( ). This will grab the frequency domain data.

**getTimeDomainData( ):** This method is delegated from AudioAnalyzer to grab the Time Domain Data.

**cleanup( ):** This method is delegated from the Input class to help cleanup Audio Contexts.

### Convenience Methods

The convenience methods below are derived from our Visualizer Class. They are here to quickly set up some basic visualizers. They all have intializePending( ) set up so you do not need to worry about placing them in your event handler. All methods will also take in the same optional 'options' parameter - defined in our [visualizer class docs](#visualizer-api)

**simpleLine( ):** Called through waviz.simpleLine( ). This will set up a simpleLine in rectangular coordinates.
**simpleBars( ):** This will create a bar-form visualizer in rectangular coordinates.
**simplePolarLine( ):** This will create a line visualizer mapped over polar coordinates.
**simplePolarBars( ):** This will create a bar-form visualizer mapped over polar coordinates.

## Input API

### Core Methods

**connectAudioSource( ):** A router that takes in an audioSource as an argument. This will route the audio to correct managers that we have pre-defined. The current audio supported are:

- HTML Audio elements (defined as a HTML Audio Element)
- HTML Video elements (defined as a HTML Video Element)
- Local File inputs
- URL/path strings to media files (defined as a string path)
- Microphone (defined by the string: 'microphone') - This will require user permission for microphone access of the tab.
- Tab Audio (defined by the string: 'screenAudio') - **_Warning: This feature is currently only supported by Chromium Browsers. It will require user permission for screen video capture of the tab. Will only capture current tab. This may change in the future. Refer to MDN docs for up-to-date support: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia_**
- MediaStream input (defined by an await statement of a mediaStream) - **Highly recommend only using pre-defined methods if it exists for the mediaStream. This input will not have sanity checks and is here for edge cases/more flexibility and control for the user.**

**Handlers:** We currently have two primary handlers for an audio input.

- connectToAudioElement( ) - takes in an audio element as an argument. This will handle local files, htmls, and URL strings/paths to audio.
- connectToMediaStream( ) - takes in a stream element as an argument. This will handle all mediaStream connections.

**initializePending( ):** This method is important for waiting for the async user permissions (for media streams). Without this wait, a connection will be set up without waiting for permission, leading to a permanently suspended audio context.

- Make sure to call this method before calling a visualizer function to prevent problem listed above!
- This method also acts as a middleware router for Microphone and screenAudio!
- If using the convenience methods defined in the [Waviz Composition Class](#waviz-composition-api), this will be pre-initialized for you.

**Local audio methods. All methods here route to connectToAudioElement**

- loadAudioFile( ) - takes in an event from an event handler and routes to the handler.
- connectToAudioURL( ) - takes in a string. String should point to the path of an audio file.
- connectToHTMLElement( ) - takes in an existing HTML audio/video element to process through WebAudioAPI. It is currently tied to an event listener listening for 'play' to resume audio context.

**MediaStream methods. All methods here route to connectToMediaStream( ):**

- connectToMicrophone( ) - is routed from initializePending(). Sets up access to user microphone through the browser. _supported by most modern browsers (chrome, firefox, safari, edge)_
- connectToScreenAudio( ) - is routed from initializePending(). Sets up access to user tab audio via getDisplayMedia(). It is limited to the tab in which the application is contained within. It does this by grabbing video access, and then turning off video while keeping audio from the video feed. Without this, audio cannot be grabbed. This feature is currently only supported by Chromium Browsers (\*Subject to change - refer to MDN documentation).

### API Methods:

- getSourceNode( ) - if you want to figure out which sourceNode is being passed in
- getAudioContext( ) - to get the current used audioContext
- cleanup( ) - this will clear the current audioContext and disconnect the sourceNode. To reaccess features, a re-initialization of the audioContext/sourceNode will be necessary.

## Analyzer API

### Core Methods

**startAnalysis( ):** The primary method of the audioAnalyzer class. It will run a Fourier analysis on the audioContext using .createAnalyser() defined by WebAudioApi. By default, it will take a fftSize of 2048.

_Future Update: Allow users to dynamically change fftSize!_

### API Methods

- getFrequencyData( ) - allows users/functions to pull the array of frequency data mapped by FFT in bins to access. The array will be of type 8-bit unsigned integers with an array length of 1/2 the fftSize.
- getTimeDomainData( ) - allows users/functions to pull the array of time mapped data by FFT in bins to access. The array will be of type 8-bit unsigned integers with an array length of 1/2 the fftSize.
- getDataArray( ) - allows users/functions to grab the raw freq data in type 8-bit unsigned integers.
- getBufferLength( ) - this will output the frequency bin count as a number, which will be 1/2 the fftSize.
- get timeData( ) - a getter function that outputs the same result as getTimeDomainData(). This is here in case users want to access live data via a getter function instead.
- get freqData( ) - a getter function that outputs the same result as getFrequencyData(). This is here in case users want to access live data via a getter function instead.

## Visualizer API

The Waviz visualizer can be customized using a configuration object or an array of configuration objects. Each object supports five fields:

```ts
{
  domain: [],
  coord: [],
  viz: [],
  color: [],
  style: [],
}
```

You can mix and match these fields to customize your visualization layer(s).

#### Domain field

Controls the **type and shape of audio data** input.

```ts
domain: [<domainType>, <amplitude>, <range>, <window**>]
```

- **domainType** _'time'_ or _'freq'_
  <br>_'time'_ → Original waveform (TimeDomain)._(default)_
  <br>_'freq'_ → Frequency data via FFT.

- **amplitude** _(default 100)_
  <br>Controls the height or intensity of the waveform.

- **range**: _(default 1024)_
  <br>Controls how much of the audio data is used, useful to trim high-end frequencies.

#### Coordinates field

Controls the **coordinate system** for rendering.

```ts
coord: [<coordinateSystem>, <radius?>]
```

- **coordinateSystem** _'rect'_ or _'polar'_
  <br>_'rect'_ → Cartesian XY space. _(default)_
  <br>'polar'\* → Circular coordinate system.

- **radius** _(only for polar)_: _(default 100)_
  <br>Sets the radius of the circular drawing area.

#### Visualizer field

Controls **what type of visual representation** to draw.

```ts
viz: [<visualizationType>, <...params>]
```

<br>
**Available Visualizations**

##### 'line' _(default)_

Draws a waveform line.

```ts
viz: ['line', <sampling>]
```

- **sampling** - Number of points to sample. _(default 1024)_

##### 'bars'

Draws vertical bars based on amplitude.

```ts
viz: ['bars', <numBars>]
```

- **numBars** - Number of bars. _(default 8)_

##### 'dots'

Draws a series of animated dots.

```ts
viz: ['dots', <numDots>]
```

- **numDots**: Number of dots. _(default 100)_\*\*

##### 'particles'

Spawns reactive particles from waveform data.

```ts
viz: ['particles', <initialVelocity>, <gravity>, <lifespan>, <birthrate>, <sampling>]
```

- **initialVelocity**: [x, y] pair _(default [1, 1])_
- **gravity**: Force applied on Y-axis _(default 1)_
- **lifespan**: Frames particles remain alive _(default Infinity)_
- **birthrate**: How often particles spawn _(default 1)_
- **sampling**: Number of particle spawn points _(default 100)_

> ⚠️ Large particle counts can degrade performance. Adjust _lifespan_ and _birthrate_ to optimize.

### Color

Defines the **color mode** for the visualizer.

```ts
color: [<colorMode>, <...args>]
```

<br>
**Available Modes**

##### Solid Color

Use any CSS color or HEX code:

```ts
color: ['red'];
color: ['#23AB87'];
```

##### Linear Gradient

Creates a vertical color blend from _color1_ to _color2_.

```ts
color: ['linearGradient', <color1>, <color2>, <flip>];
```

- **color1 abd color2** - Any color in CSS, hex, or rgb format
- **flip** - Optional string _'flip'_. Flips direction of gradient.

##### Radial Gradient

Creates a center-out radial gradient.

```ts
color: ['radialGradient', <color1>, <color2>, <innerRadius>, <outerRadius>];
```

- **color1 abd color2** - Any color in CSS, hex, or rgb format
- **innerRadius** - The radius of _color1_
- **outerRadius** - The radius of _color2_

##### Random Color (Per Frame)

Assigns a new random color every frame.

```ts
color: ['randomColor'];
```

##### Random Palette (Per Frame)

Chooses a new color from a custom palette each frame.

```ts
color: ['randomPalette', <arrayOfColors>];
```

- **arrayOfColors** - An array with any number of colors in CSS, hex, or rgb format

### Stroke

```ts
color: ['stroke', <width>, <style>];
```

- **width** - A number defining the width or size of visualizer elements in pixels
- **style** - An optional string _'dashes'_ allows to chanse line and bar styles to dashed

### Fill

```ts
color: ['fill', <fillType>, <fillColor>, <flip>];
```

- **fillType** - The style of color fill
  <br>_'solid'_ → A solid color fill (takes a single color)
  <br>_'gradient'_ → A gradient color fill (takes an array of 2 colors)
- **flip** - Optional string _'flip'_. Flips direction of gradient.

## Layering Multiple Visualizations

Waviz supports rendering **multiple visualizations simultaneously** on the same canvas using a layer system. This is useful for combining different visual effects (e.g., polar + rectangular, particles + bars).

To use layering, pass an **array of options objects** to the _.render()_ method:

```ts
viz.visualizer.render([
  {
    domain: ['time'],
    coord: ['rect'],
    viz: ['particles', [2, 2], 3],
    color: ['linearGradient'],
    style: [2],
  },
  {
    domain: ['time'],
    coord: ['polar'],
    viz: ['particles', [3, 3], 1, 20],
    color: ['linearGradient'],
    style: [2],
  },
]);
```

Each object in the array defines one **layer**, and Waviz will render them in order from bottom to top.

> ✅ Tip: You can mix coordinate systems, visualizer types, and color schemes across layers for dynamic, complex effects.

## Convenience Methods

Waviz also includes a few built-in shorthand methods for common visualizations. These methods can quickly generate preset visualizations and allow for color customization.

#### .simpleLine(\<color>)

Renders a basic line visualization in rectangular coordinates with a single color.

```ts
viz.visualizer.simpleLine('#E34AB0');
```

#### .simpleBars(\<color>)

Renders vertical bars using TimeDomain data with increased amplitude and thick strokes.

```ts
viz.visualizer.simpleBars('#E34AB0');
```

#### .simplePolarLine(\<color>)

Renders a circular line visualization using polar coordinates.

```ts
viz.visualizer.simplePolarLine('#E34AB0');
```

#### .simplePolarBars(\<color>)

Renders radial bars in a circular layout.

```ts
viz.visualizer.simplePolarBars('#E34AB0');
```
