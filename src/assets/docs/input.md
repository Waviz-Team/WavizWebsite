### Input

The purpose of the Input class is to help initialize an audio analyzer as well as identify the different types of audio/signals. The Input Class takes in two optional argument: a callback and an audioContext. The callback (tailored for an audio analyzer) must be initialized in order to use the other methods. The audioContext should only be passed if an audio context has already been set up. Otherwise, our Input class will create an audioContext by default for the user. ***If using mediaStream methods, make sure to call on them within an event listener tied to a user gesture to stay in line with CORS policy!***

### Methods

**connectAudioSource():** A router that takes in an audioSource as an argument. This will route the audio to correct managers that we have pre-defined. The current audio supported are: 

- HTML Audio elements (defined as a HTML Audio Element)  
- Local File inputs  
- URL/path strings to media files (defined as a string path)  
- Microphone (defined by 'microphone')  
- Tab Audio (defined by 'screenAudio')  
- MediaStream input (defined by an await statement of a mediaStream)  

**Handlers:**

- `connectToAudioElement()` - handles local files, htmls, and URL strings  
- `connectToMediaStream()` - handles all mediaStream connections

**initializePending():**  
Important for waiting for async user permissions.  
Acts as middleware router for microphone and screen audio.

**Local audio methods:**

- `loadAudioFile()`  
- `connectToAudioURL()`  
- `connectToHTMLElement()`  

**MediaStream methods:**

- `connectToMicrophone()`  
- `connectToScreenAudio()`  

**API Methods:**

- `getSourceNode()`  
- `getAudioContext()`  
- `cleanup()`  
