export type Param = { name: string; value: string };

export type GalleryItem = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  params?: Param[];
  code?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Bars 1',
    imageUrl: '/assets/gallery/Bars1.gif',
    description: 'Basic vertical bars reacting to audio.',
    params: [
      {
        name: 'Color',
        value: 'String: Accepts a color in CSS, Hex, or RGB format',
      },
      {
        name: 'Amplitude',
        value: 'Number: Accepts a number to control amplitude of bars',
      },
    ],
    code: "Bars1('#2387AA', 250 );",
  },
  {
    id: 2,
    title: 'Bars 2',
    imageUrl: '/assets/gallery/Bars2.gif',
    description: 'Bars with smooth hanning window animation.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars to display' },
    ],
    code: "Bars2('#E93EB7', 40);",
  },
  {
    id: 3,
    title: 'Bars 3',
    imageUrl: '/assets/gallery/Bars3.gif',
    description: 'Gradient bars with custom waveform.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "Bars3('#0088ff', '#00ffd5');",
  },
  {
    id: 4,
    title: 'Bars 4',
    imageUrl: '/assets/gallery/Bars4.gif',
    description: 'Bars arranged in a polar (circular) layout with a linear gradient.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
    ],
    code: "Bars4('#E93EB7', '#24B9F7', 120);",
  },
  {
    id: 5,
    title: 'Bars 5',
    imageUrl: '/assets/gallery/Bars5.gif',
    description: 'Gradient bars with adjustable count.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "Bars5('#E93EB7', '#24B9F7', 20);",
  },
  {
    id: 6,
    title: 'Bars 6',
    imageUrl: '/assets/gallery/Bars6.gif',
    description: 'Frequency-based bars with color and count based around the first 300 samples.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "Bars6('#E93EB7', 11);",
  },
  {
    id: 7,
    title: 'Dots 1',
    imageUrl: '/assets/gallery/Dots1.gif',
    description: 'Simple dots visualizer with customizable color and dot count.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Dots', value: 'Number: Number of dots' },
    ],
    code: "Dots1('#ff00ff', 32);",
  },
  {
    id: 8,
    title: 'Dots 2',
    imageUrl: '/assets/gallery/Dots2.gif',
    description: 'Linear gradient dots in motion.',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
    ],
    code: "Dots2('#E93EB7', '#24B9F7');",
  },
  {
    id: 9,
    title: 'Dots 3',
    imageUrl: '/assets/gallery/Dots3.gif',
    description: 'Radial gradient dots animation.',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "Dots3('#E93EB7', '#24B9F7');",
  },
  {
    id: 10,
    title: 'Dots 4',
    imageUrl: '/assets/gallery/Dots4.gif',
    description: 'Multi-layered dots with radial gradients and color transitions.',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "Dots4('#E93EB7', '#24B9F7');",
  },
  {
    id: 11,
    title: 'Mixed 1',
    imageUrl: '/assets/gallery/Mixed1.gif',
    description: 'Combination of polar bars and particles, customizable color and bar count.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "Mixed1('#00BFFF', 200);",
  },
  {
    id: 12,
    title: 'Mixed 2',
    imageUrl: '/assets/gallery/Mixed2.gif',
    description: 'Bars with a random color palette and a secondary color for particles.',
    params: [
      { name: 'Palette', value: 'Array: Array of color strings for palette' },
      { name: 'Color', value: 'String: Color for second layer' },
    ],
    code: "Mixed2(['#E91E63', '#9C27B0'], '#00bcd4');",
  },
  {
    id: 13,
    title: 'Mixed 3',
    imageUrl: '/assets/gallery/Mixed3.gif',
    description: 'Multi-layered polar bars and lines with radial gradients.',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "Mixed3('#0088ff', '#00ffd5');",
  },
  {
    id: 14,
    title: 'Mixed 4',
    imageUrl: '/assets/gallery/Mixed4.gif',
    description: 'Multi-layered polar bars, lines, and particles with gradients.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "Mixed4('#70044a', '#f84791');",
  },
  {
    id: 15,
    title: 'Mixed 5',
    imageUrl: '/assets/gallery/Mixed5.gif',
    description: 'Combination of polar bars, dots, and particles with random palettes.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "Mixed5('#57BBDE', 30);",
  },
  {
    id: 16,
    title: 'Mixed 6',
    imageUrl: '/assets/gallery/Mixed6.gif',
    description: 'Gradient mixed waveform with particles bubbling upwards.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "Mixed6('yellow', 'red');",
  },
  {
    id: 17,
    title: 'Mixed 7',
    imageUrl: '/assets/gallery/Mixed7.gif',
    description: 'Particles and lines with a linear gradient and "flip" effect.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "Mixed7('white', 'teal');",
  },
  {
    id: 18,
    title: 'Mixed 8',
    imageUrl: '/assets/gallery/Mixed8.gif',
    description: 'Multi-layered lines and particles with linear gradients.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "Mixed8('#00FFFF', '#8A2BE2');",
  },
  {
    id: 19,
    title: 'Mixed 9',
    imageUrl: '/assets/gallery/Mixed9.gif',
    description: 'Multi-layered polar lines and dots, customizable color.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "Mixed9('#7afff2');",
  },
  {
    id: 20,
    title: 'Mixed 10',
    imageUrl: '/assets/gallery/Mixed10.gif',
    description: 'Multi-layered polar lines and particles with radial gradients.',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "Mixed10('#315f00', '#adffc1');",
  },
  {
    id: 21,
    title: 'Mixed 11',
    imageUrl: '/assets/gallery/Mixed11.gif',
    description: 'Polar lines and dots, customizable color.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "Mixed11('#7afff2');",
  },
  {
    id: 22,
    title: 'Particles 1',
    imageUrl: '/assets/gallery/Particles1.gif',
    description: 'Particle burst visualizer with radial gradient coloring.',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient (CSS, Hex, or RGB format)' },
      { name: 'Color2', value: 'String: End color for radial gradient (CSS, Hex, or RGB format)' }
    ],
    code: "Particles1('#E93EB7', '#24B9F7');",
  },
  {
    id: 23,
    title: 'Wave 1',
    imageUrl: '/assets/gallery/Wave1.gif',
    description: 'Simple waveform line, customizable color and sample count.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Samples', value: 'Number: Number of samples (resolution)' },
    ],
    code: "Wave1('#E93EB7', 400);",
  },
  {
    id: 24,
    title: 'Wave 2',
    imageUrl: '/assets/gallery/Wave2.gif',
    description: 'Waveform line with a linear gradient.',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
    ],
    code: "Wave2('#E93EB7', '#24B9F7');",
  },
  {
    id: 25,
    title: 'Wave 3',
    imageUrl: '/assets/gallery/Wave3.gif',
    description: 'Three-line waveform with color control.',
    params: [
      { name: 'Color1', value: 'String: Color for first line' },
      { name: 'Color2', value: 'String: Color for second line' },
      { name: 'Color3', value: 'String: Color for third line' },
    ],
    code: "Wave3('#2F4FC4', '#DED414', '#DE3914');",
  },
  {
    id: 26,
    title: 'Wave 4',
    imageUrl: '/assets/gallery/Wave4.gif',
    description: 'Multi-layered waveform lines with dynamic color gradients.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "Wave4('#eb1b00');",
  },
  {
    id: 27,
    title: 'Wave 5',
    imageUrl: '/assets/gallery/Wave5.gif',
    description: 'Polar waveform with linear gradient, customizable radius and rotation.',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
      { name: 'Angle', value: 'Number: Rotation angle' },
    ],
    code: "Wave5('red', 'orange', 100, 90);",
  },
  {
    id: 28,
    title: 'Wave 6',
    imageUrl: '/assets/gallery/Wave6.gif',
    description: 'Polar waveform with lightning-like effect and linear gradient.',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
    ],
    code: "Wave6('white', '#00BFFF', 100);",
  },
  {
    id: 29,
    title: 'Wave 7',
    imageUrl: '/assets/gallery/Wave7.gif',
    description: 'Multi-layered polar waveform with dynamic color shifting.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "Wave7('#eb1b00');",
  },
];
