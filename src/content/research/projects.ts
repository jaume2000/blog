export interface ResearchLink {
  href: string
  label: string
}

export interface ResearchProject {
  slug: string
  title: string
  period?: string
  status: string
  body: string
  /** Presence on Home, and order there (1 first). */
  featured?: number
  links?: readonly ResearchLink[]
}

export const RESEARCH_INTRO =
  'Mostly computer vision, with a habit of going back to first principles: train it from scratch, find out what breaks, reformulate the problem when the standard one stops making sense.'

export const RESEARCH_PROJECTS: readonly ResearchProject[] = [
  {
    slug: 'representation-dynamics',
    title:
      'What Extra Euler Steps Reveal About Residual Networks: Feature Dynamics in Weight-Tied and Untied Stages',
    period: '2026 – now',
    status: 'Independent research · manuscript in preparation',
    featured: 1,
    body: 'Every skip connection is one Euler step, so it can be split into as many smaller steps as you like without fine-tuning. That turns nine snapshots of a network into a continuous trajectory, which I use to study representation dynamics with differential geometry: one shared block flows smoothly through stage 3, while independent blocks zig-zag and undo each other.',
    links: [
      { href: '/research/representation-dynamics', label: 'Read the write-up' },
      { href: 'https://github.com/jaume2000/dynamics_skip_nn', label: 'Code on GitHub' },
    ],
  },
  {
    slug: 'auto-n2n',
    title: 'Auto-N2N: Self-supervised MRI Denoising using Synthetic Pair Generation and Mixture of Experts',
    period: '2026',
    status: 'Preprint · MIDL 2026 · with S. Morell-Ortega et al.',
    body: 'Self-supervised MRI denoising: synthetic noisy pairs and a mixture of experts, without clean targets. I am a co-author on the submission.',
    links: [{ href: 'https://openreview.net/forum?noteId=1f93N1n8RP', label: 'OpenReview' }],
  },
  {
    slug: 'cytopathic-effect',
    title: 'Detecting Cytopathic Effect in Cell Culture with Computer Vision',
    period: '2026',
    status: 'Under review · with W. Ragazzo',
    body: 'A computer-vision pipeline for detecting cytopathic effect in cell-culture images, where the signal is a change in the monolayer rather than a countable object.',
  },
  {
    slug: 'brain-mri',
    title: 'Volumetric brain MRI segmentation',
    period: '2025 – 2026',
    status: 'MIALAB, UPV',
    featured: 4,
    body: 'Volumetric brain MRI segmentation with nnU-Net and inference-pipeline optimisation for the VolBrain platform. Scarce data, contested ground truth, and nobody accepts a number without an error bar.',
  },
  {
    slug: 'colony-counting',
    title: 'Counting what cannot be separated',
    period: '2024 – now',
    status: "Master's thesis · now Mycrospace",
    featured: 2,
    body: 'Automatic colony counting on microbiology plates, which started as my master’s thesis and became Mycrospace. Detectors work until roughly 300 overlapping colonies, then stop separating instances at all, so for crowded plates I reformulated counting as density estimation with Bayesian priors.',
    links: [{ href: '/work#mycrospace', label: 'Read the case' }],
  },
  {
    slug: 'convnext-v1',
    title: 'ConvNeXt-V1 from scratch',
    period: '2025 – 2026',
    status: 'EuroHPC Leonardo',
    featured: 3,
    body: 'ConvNeXt-Tiny trained from scratch on ImageNet-1k on the Leonardo supercomputer, reaching 81% top-1 with my own training framework. The run is the baseline for the residual-as-Euler work: locating redundant parameters, and reparametrising residual blocks read as steps of an ODE solver.',
    links: [
      { href: 'https://github.com/jaume2000/convnext_v1', label: 'Code on GitHub' },
      { href: '/work#convnext-leonardo', label: 'Read the case' },
    ],
  },
]

export const FEATURED_RESEARCH = RESEARCH_PROJECTS.filter(
  (project): project is ResearchProject & { featured: number } => project.featured != null,
).sort((a, b) => a.featured - b.featured)
