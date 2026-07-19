export const heroContent = {
  titleLines: ['FROM', 'SOUND', 'TO SHAPE'],
  introduction:
    'I study whether the motion of the full vocal tract can be reconstructed from speech, including for speakers a model has never seen.',
  supporting:
    'My work combines speech processing, computer vision, real-time MRI, anatomical normalization, and self-supervised learning.',
  figure: {
    number: '01',
    title: 'Speaker-normalized vocal-tract contour',
    note: 'Original abstract line study — no participant data shown.',
  },
} as const;

export const researchDirections = [
  {
    number: '01',
    title: 'Speaker-independent acoustic-to-articulatory inversion',
    summary: 'Reconstructing full vocal-tract motion from speech across speakers.',
    methods: ['Speech processing', 'Cross-speaker evaluation', 'Real-time MRI'],
  },
  {
    number: '02',
    title: 'Anatomical normalization',
    summary: 'Aligning articulatory predictions across different speaker anatomies.',
    methods: ['Geometric alignment', 'Vocal-tract contours', 'Grid normalization'],
  },
  {
    number: '03',
    title: 'MRI video representation learning',
    summary: 'Learning temporal representations from largely unlabelled rtMRI sequences.',
    methods: ['Computer vision', 'Self-supervised learning', 'Temporal modelling'],
  },
] as const;

export const currentWork = [
  'Testing cross-speaker contour adaptation using a reference-speaker model.',
  'Evaluating how anatomical normalization affects articulatory prediction errors.',
  'Exploring self-supervised representations for real-time MRI video.',
] as const;

export const biography = [
  'I am a PhD researcher based in Nancy, France, working at Université de Lorraine and LORIA. My research focuses on speaker-independent acoustic-to-articulatory inversion of the full vocal tract. I am particularly interested in how speech, imaging, geometry, and representation learning can be combined to build models that generalize across speakers.',
  'Alongside my research, I build research software and explore practical AI products.',
] as const;

// Legacy exports keep the previous, now-unrendered homepage components type-safe while they remain
// in the repository for reference. The editorial homepage above does not import these values.
export const homeOptions = { enableMotion: false } as const;

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
