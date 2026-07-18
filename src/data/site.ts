export interface SiteProfile {
  name: string;
  shortName: string;
  headline: string;
  position: string;
  location: string;
  affiliation: string;
  biography: string[];
  researchInterests: string[];
  engineeringInterests: string[];
  email?: string;
  github?: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
}

export const siteProfile: SiteProfile = {
  name: 'Nhat-Nam Nguyen',
  shortName: 'Nam',
  headline: 'PhD Researcher in AI, Speech, and Computer Vision',
  position: 'PhD Researcher',
  location: 'Nancy, France',
  affiliation: 'Université de Lorraine, LORIA, Multispeech',
  biography: [
    'I am a PhD researcher in Nancy, France, working at the intersection of speech processing, computer vision, and medical imaging. My research focuses on speaker-independent acoustic-to-articulatory inversion of the full vocal tract using real-time MRI, segmentation, speaker normalization, and self-supervised learning.',
    'Alongside my research, I build practical software systems and explore how advanced AI techniques can become useful, focused products.',
  ],
  researchInterests: [
    'Speech processing',
    'Computer vision',
    'Real-time MRI',
    'Vocal-tract segmentation',
    'Speaker normalization',
    'Self-supervised representation learning',
    'Acoustic-to-articulatory inversion',
  ],
  engineeringInterests: [
    'Offline-first applications',
    'Data synchronization',
    'AI developer tools',
    'Research software',
    'Solo technology entrepreneurship',
  ],
  // TODO: Add verified email and social profile URLs when available.
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/research/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
  { href: '/publications/', label: 'Publications' },
  { href: '/notes/', label: 'Notes' },
  { href: '/cv/', label: 'CV' },
] as const;

export const siteDescription =
  'Research and software by Nhat-Nam Nguyen, a PhD researcher working across speech processing, computer vision, medical imaging, and practical AI systems.';
