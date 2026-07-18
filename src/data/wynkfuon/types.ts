export interface MemoryItem {
  id: string;
  number: number;
  title: string;
  date?: string;
  image: string;
  alt: string;
  caption: string;
}

export interface VideoItem {
  id: string;
  title: string;
  src?: string;
  poster?: string;
  caption?: string;
}

export interface PatchNote {
  version: string;
  date?: string;
  changes: string[];
}

export interface LoveReason {
  id: string;
  text: string;
}

export interface FinalLetter {
  salutation: string;
  paragraphs: string[];
  signOff: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}
