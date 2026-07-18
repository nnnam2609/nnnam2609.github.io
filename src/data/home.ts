export const explorationItems = [
  { topic: 'Speaker-independent AAI', status: 'Researching' },
  { topic: 'MRI-video JEPA', status: 'Exploring' },
  { topic: 'Vocal-tract segmentation', status: 'Building' },
  { topic: 'Anatomical normalization', status: 'Researching' },
  { topic: 'Offline-first systems', status: 'Exploring' },
] as const;

export const researchPipeline = [
  {
    number: '01',
    key: 'observe',
    title: 'Observe',
    description: 'Real-time MRI and synchronized speech reveal how articulation evolves over time.',
    label: 'speech + rtMRI',
  },
  {
    number: '02',
    key: 'understand',
    title: 'Understand',
    description:
      'Segmentation, anatomical normalization, and self-supervised learning create representations that can generalize across speakers.',
    label: 'normalized representations',
  },
  {
    number: '03',
    key: 'reconstruct',
    title: 'Reconstruct',
    description:
      'Acoustic-to-articulatory inversion estimates vocal-tract motion directly from speech.',
    label: 'predicted articulation',
  },
] as const;

export const researchThemes = [
  {
    key: 'speech',
    title: 'Speech',
    description: 'Acoustic modelling, speaker normalization, and self-supervised learning.',
    topics: ['Acoustic modelling', 'Speaker normalization', 'Self-supervised learning'],
  },
  {
    key: 'aai',
    title: 'AAI',
    description: 'Reconstructing vocal-tract motion and studying generalization across speakers.',
    topics: ['Vocal-tract reconstruction', 'Cross-speaker generalization', 'Evaluation'],
  },
  {
    key: 'mri',
    title: 'Real-time MRI',
    description: 'Learning visual and anatomical representations of articulation over time.',
    topics: ['Segmentation', 'Anatomical normalization', 'Representation learning'],
  },
] as const;
