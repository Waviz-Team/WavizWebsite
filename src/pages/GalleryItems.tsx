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
    description: 'Another stunning audio reactive effect.',
    params: [
      { name: 'speed', value: '1.5x' },
      { name: 'intensity', value: 'medium' },
    ],
    code: 'wavizBars2({ speed: 1.5, intensity: "medium" });',
  },
  {
    id: 3,
    title: 'Waviz Visualization 3',
    imageUrl: '/assets/gallery/Bars3.gif',
    description: 'Visualization with custom waveform presets.',
    params: [
      { name: 'preset', value: 'waveform-x' },
      { name: 'duration', value: '60s' },
    ],
    code: 'wavizCustom({ preset: "waveform-x", duration: 60 });',
  },
  {
    id: 4,
    title: 'Waviz Visualization 4',
    imageUrl: '/assets/gallery/Bars4.gif',
    description: 'Colorful ring-based sound animation.',
    params: [
      { name: 'ringCount', value: '5' },
      { name: 'color', value: 'rainbow' },
    ],
    code: 'wavizRings({ ringCount: 5, color: "rainbow" });',
  },
  {
    id: 5,
    title: 'Waviz Visualization 5',
    imageUrl: '/assets/gallery/Bars5.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 6,
    title: 'Waviz Visualization 6',
    imageUrl: '/assets/gallery/Bars6.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 7,
    title: 'Waviz Visualization 7',
    imageUrl: '/assets/gallery/Dots1.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 8,
    title: 'Waviz Visualization 8',
    imageUrl: '/assets/gallery/Dots2.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 9,
    title: 'Waviz Visualization 9',
    imageUrl: '/assets/gallery/Dots3.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 10,
    title: 'Waviz Visualization 10',
    imageUrl: '/assets/gallery/Dots4.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 11,
    title: 'Waviz Visualization 11',
    imageUrl: '/assets/gallery/Mixed1.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 12,
    title: 'Waviz Visualization 12',
    imageUrl: '/assets/gallery/Mixed2.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 13,
    title: 'Waviz Visualization 13',
    imageUrl: '/assets/gallery/Mixed3.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 14,
    title: 'Waviz Visualization 14',
    imageUrl: '/assets/gallery/Mixed4.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 15,
    title: 'Waviz Visualization 15',
    imageUrl: '/assets/gallery/Mixed5.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 16,
    title: 'Waviz Visualization 16',
    imageUrl: '/assets/gallery/Mixed6.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 17,
    title: 'Waviz Visualization 17',
    imageUrl: '/assets/gallery/Mixed7.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 18,
    title: 'Waviz Visualization 18',
    imageUrl: '/assets/gallery/Mixed8.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 19,
    title: 'Waviz Visualization 19',
    imageUrl: '/assets/gallery/Mixed9.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 20,
    title: 'Waviz Visualization 20',
    imageUrl: '/assets/gallery/Mixed10.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 21,
    title: 'Waviz Visualization 21',
    imageUrl: '/assets/gallery/Mixed11.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 22,
    title: 'Waviz Visualization 22',
    imageUrl: '/assets/gallery/Particles1.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 23,
    title: 'Waviz Visualization 23',
    imageUrl: '/assets/gallery/Wave1.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 24,
    title: 'Waviz Visualization 24',
    imageUrl: '/assets/gallery/Wave2.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 25,
    title: 'Waviz Visualization 25',
    imageUrl: '/assets/gallery/Wave3.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 26,
    title: 'Waviz Visualization 26',
    imageUrl: '/assets/gallery/Wave4.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 27,
    title: 'Waviz Visualization 27',
    imageUrl: '/assets/gallery/Wave5.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 28,
    title: 'Waviz Visualization 28',
    imageUrl: '/assets/gallery/Wave6.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
  {
    id: 29,
    title: 'Waviz Visualization 29',
    imageUrl: '/assets/gallery/Wave7.gif',
    description: 'Visualization description',
    params: [
{name: 'Param 1', value:'Param 1 Type: Param 1 Description'},
{name: 'Param 2', value:'Param 2 Type: Param 2 Description'}
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
];
