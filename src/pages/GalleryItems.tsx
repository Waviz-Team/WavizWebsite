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
    title: 'Waviz Visualization 1',
    imageUrl: '/assets/gallery/Bars1.gif',
    description: 'Real-time audio visualization powered by Waviz.',
    params: [
      { name: '', value: '123' },
      { name: 'bar', value: '456' },
      { name: 'baz', value: '789' },
    ],
    code: 'wavizBars({ foo: 1233, bar: 456, baz: 789 });',
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
    description: 'Dynamic light orb synced with audio beats.',
    params: [
      { name: 'glow', value: 'true' },
      { name: 'sync', value: 'beats' },
    ],
    code: 'wavizOrb({ glow: true, sync: "beats" });',
  },
];
