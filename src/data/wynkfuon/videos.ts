import type { VideoItem } from './types';

// Add a public-folder path to `src` when the real file is ready, for example:
// src: 'wynkfuon/videos/two-idiots-in-love.mp4'
export const videos: VideoItem[] = [
  {
    id: 'two-idiots',
    title: 'Two Idiots in Love',
    poster: 'wynkfuon/images/thumbnails/video-placeholder.svg',
    caption: 'A very serious documentary with no serious moments.',
  },
  {
    id: 'normal-photo',
    title: 'Mission: Take One Normal Photo',
    poster: 'wynkfuon/images/thumbnails/video-placeholder.svg',
    caption: 'Mission status: spectacularly unsuccessful.',
  },
  {
    id: 'everything-wrong',
    title: 'The Day Everything Went Wrong',
    poster: 'wynkfuon/images/thumbnails/video-placeholder.svg',
    caption: 'Everything went wrong, except being together.',
  },
  {
    id: 'against-world',
    title: 'Wynkfuon Against the World',
    poster: 'wynkfuon/images/thumbnails/video-placeholder.svg',
    caption: 'Season one. Renewed forever.',
  },
];
