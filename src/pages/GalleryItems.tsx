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
    title: 'Simple Bars 1',
    imageUrl: '/assets/gallery/Bars1.gif',
    description: 'Simple visualization using bars',
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
    code: "wavizBars('#2387AA', 250 );",
  },
  {
    id: 2,
    title: 'Waviz Visualization 2',
    imageUrl: '/assets/gallery/Bars2.gif',
    description: 'Another stunning audio reactive effect using hanning windowing.',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars to display' },
    ],
    code: "wavizBars2('#E93EB7', 40);",
  },
  {
    id: 3,
    title: 'Waviz Visualization 3',
    imageUrl: '/assets/gallery/Bars3.gif',
    description: 'Visualization with custom waveform presets.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "wavizBars3('#0088ff', '#00ffd5');",
  },
  {
    id: 4,
    title: 'Waviz Visualization 4',
    imageUrl: '/assets/gallery/Bars4.gif',
    description: 'Colorful ring-based sound animation.',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
    ],
    code: "wavizBars4('#E93EB7', '#24B9F7', 120);",
  },
  {
    id: 5,
    title: 'Waviz Visualization 5',
    imageUrl: '/assets/gallery/Bars5.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "wavizBars5('#E93EB7', '#24B9F7', 20);",
  },
  {
    id: 6,
    title: 'Waviz Visualization 6',
    imageUrl: '/assets/gallery/Bars6.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "wavizBars6('#E93EB7', 11);",
  },
  {
    id: 7,
    title: 'Waviz Visualization 7',
    imageUrl: '/assets/gallery/Dots1.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Dots', value: 'Number: Number of dots' },
    ],
    code: "wavizDots1('#ff00ff', 32);",
  },
  {
    id: 8,
    title: 'Waviz Visualization 8',
    imageUrl: '/assets/gallery/Dots2.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
    ],
    code: "wavizDots2('#E93EB7', '#24B9F7');",
  },
  {
    id: 9,
    title: 'Waviz Visualization 9',
    imageUrl: '/assets/gallery/Dots3.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "wavizDots3('#E93EB7', '#24B9F7');",
  },
  {
    id: 10,
    title: 'Waviz Visualization 10',
    imageUrl: '/assets/gallery/Dots4.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "wavizDots4('#E93EB7', '#24B9F7');",
  },
  {
    id: 11,
    title: 'Waviz Visualization 11',
    imageUrl: '/assets/gallery/Mixed1.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "wavizMixed1('#00BFFF', 200);",
  },
  {
    id: 12,
    title: 'Waviz Visualization 12',
    imageUrl: '/assets/gallery/Mixed2.gif',
    description: 'Visualization description',
    params: [
      { name: 'Palette', value: 'Array: Array of color strings for palette' },
      { name: 'Color', value: 'String: Color for second layer' },
    ],
    code: "wavizMixed2(['#E91E63', '#9C27B0'], '#00bcd4');",
  },
  {
    id: 13,
    title: 'Waviz Visualization 13',
    imageUrl: '/assets/gallery/Mixed3.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "wavizMixed3('#0088ff', '#00ffd5');",
  },
  {
    id: 14,
    title: 'Waviz Visualization 14',
    imageUrl: '/assets/gallery/Mixed4.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "wavizMixed4('#70044a', '#f84791');",
  },
  {
    id: 15,
    title: 'Waviz Visualization 15',
    imageUrl: '/assets/gallery/Mixed5.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Bars', value: 'Number: Number of bars' },
    ],
    code: "wavizMixed5('#57BBDE', 30);",
  },
  {
    id: 16,
    title: 'Waviz Visualization 16',
    imageUrl: '/assets/gallery/Mixed6.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "wavizMixed6('yellow', 'red');",
  },
  {
    id: 17,
    title: 'Waviz Visualization 17',
    imageUrl: '/assets/gallery/Mixed7.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "wavizMixed7('white', 'teal');",
  },
  {
    id: 18,
    title: 'Waviz Visualization 18',
    imageUrl: '/assets/gallery/Mixed8.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for gradient' },
      { name: 'Color2', value: 'String: End color for gradient' },
    ],
    code: "wavizMixed8('#00FFFF', '#8A2BE2');",
  },
  {
    id: 19,
    title: 'Waviz Visualization 19',
    imageUrl: '/assets/gallery/Mixed9.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "wavizMixed9('#7afff2');",
  },
  {
    id: 20,
    title: 'Waviz Visualization 20',
    imageUrl: '/assets/gallery/Mixed10.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient' },
      { name: 'Color2', value: 'String: End color for radial gradient' },
    ],
    code: "wavizMixed10('#315f00', '#adffc1');",
  },
  {
    id: 21,
    title: 'Waviz Visualization 21',
    imageUrl: '/assets/gallery/Mixed11.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "wavizMixed11('#7afff2');",
  },
  {
    id: 22,
    title: 'Waviz Visualization 22',
    imageUrl: '/assets/gallery/Particles1.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for radial gradient (CSS, Hex, or RGB format)' },
      { name: 'Color2', value: 'String: End color for radial gradient (CSS, Hex, or RGB format)' }
    ],
    code: "wavizParticles1('#E93EB7', '#24B9F7');",
  },
  {
    id: 23,
    title: 'Waviz Visualization 23',
    imageUrl: '/assets/gallery/Wave1.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
      { name: 'Samples', value: 'Number: Number of samples (resolution)' },
    ],
    code: "wavizWave1('#E93EB7', 400);",
  },
  {
    id: 24,
    title: 'Waviz Visualization 24',
    imageUrl: '/assets/gallery/Wave2.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
    ],
    code: "wavizWave2('#E93EB7', '#24B9F7');",
  },
  {
    id: 25,
    title: 'Waviz Visualization 25',
    imageUrl: '/assets/gallery/Wave3.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Color for first line' },
      { name: 'Color2', value: 'String: Color for second line' },
      { name: 'Color3', value: 'String: Color for third line' },
    ],
    code: "wavizWave3('#2F4FC4', '#DED414', '#DE3914');",
  },
  {
    id: 26,
    title: 'Waviz Visualization 26',
    imageUrl: '/assets/gallery/Wave4.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "wavizWave4('#eb1b00');",
  },
  {
    id: 27,
    title: 'Waviz Visualization 27',
    imageUrl: '/assets/gallery/Wave5.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
      { name: 'Angle', value: 'Number: Rotation angle' },
    ],
    code: "wavizWave5('red', 'orange', 100, 90);",
  },
  {
    id: 28,
    title: 'Waviz Visualization 28',
    imageUrl: '/assets/gallery/Wave6.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color1', value: 'String: Start color for linear gradient' },
      { name: 'Color2', value: 'String: End color for linear gradient' },
      { name: 'Radius', value: 'Number: Radius for polar arrangement' },
    ],
    code: "wavizWave6('white', '#00BFFF', 100);",
  },
  {
    id: 29,
    title: 'Waviz Visualization 29',
    imageUrl: '/assets/gallery/Wave7.gif',
    description: 'Visualization description',
    params: [
      { name: 'Color', value: 'String: Accepts a color in CSS, Hex, or RGB format' },
    ],
    code: "wavizWave7('#eb1b00');",
  },
];
