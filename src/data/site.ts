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
  personalEmail?: string;
  github?: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
}

export const siteProfile: SiteProfile = {
  name: 'Nhat-Nam Nguyen',
  shortName: 'Nam',
  headline: 'PhD Researcher in Speech, Computer Vision, and Articulatory AI',
  position: 'PhD Researcher',
  location: 'Nancy, France',
  affiliation: 'Université de Lorraine · LORIA · Multispeech',
  biography: [
    'I develop AI systems that infer vocal-tract articulation from speech, combining audio modelling, computer vision, real-time MRI, anatomical normalization, and self-supervised learning.',
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
  email: 'nhat-nam.nguyen@loria.fr',
  personalEmail: 'nnnam2609@gmail.com',
  github: 'https://github.com/nnnam2609',
  // TODO: Add verified LinkedIn, Scholar, and ORCID URLs when available.
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
  'From sound to shape: research by Nhat-Nam Nguyen across speech processing, computer vision, real-time MRI, vocal-tract modelling, and articulatory AI.';
