export const ABOUT = {
  title: 'About',
  intro: [
    'I am Jaume Ivars Grimalt. ML engineer, cofounder and CTO of Mycrospace, based in Valencia.',
    'I build computer-vision systems end to end: the problem formulation, the training, the deployment, and the product people actually open. Same person for all four.',
  ],
  pathHeading: 'How I got here',
  path: [
    'B.Sc. in Computer Science, UPV, 2019 to 2023. GPA 8.3, with honour mentions in Machine Learning and Statistics.',
    'M.Sc. in Artificial Intelligence, Computer Vision and Digital Image, UPV, 2023 to 2024. GPA 8.7, thesis awarded honours.',
    'That thesis became Mycrospace. The company was incorporated in January 2026 and five laboratories run the product in production today. I am cofounder and CTO, I own the stack from the training run to the screen a microbiologist uses at the bench, and I supervise a full-stack developer.',
    'ML engineer, part-time, at MIALAB (UPV) from May 2025 to January 2026. Volumetric brain MRI segmentation with nnU-Net, and inference-pipeline optimisation for the VolBrain platform. Medical imaging is a good teacher: the data is scarce, the ground truth is contested, and nobody accepts a number without an error bar.',
    'Two freelance engagements delivered for other people’s businesses: Tapstar in 2025 and Vesta-Z in 2023. Both shipped, both are written up as cases.',
    'Earlier: Neurocatching from 2022 to 2023, and Sciling in 2022.',
  ],
  /** Link appended to the Tapstar and Vesta-Z line in `path`. */
  pathWorkLink: { href: '/work', label: 'See the work' },
  workHeading: 'How I work',
  work: [
    {
      body: 'I read the original papers, not the summaries. I want the mechanism. An ablation table telling me something works is not the same as knowing why it works, and the difference shows up the first time your data breaks an assumption the authors never wrote down. This is also why I trained ConvNeXt-V1 from scratch on a supercomputer instead of downloading the weights.',
      link: { href: '/work#convnext-leonardo', label: 'That run is a case study too.' },
    },
    {
      body: 'I cover the whole cycle because I do it every day in my own company. The model, the infrastructure, the API, the interface. Most custom AI dies in the gap between a notebook that scores well and a service someone can call, and that gap is usually where one vendor hands off to another. Here there is no handoff, and nobody is waiting on a third party to answer an email.',
    },
    {
      body: 'I say no. If an existing API already solves your problem, I tell you instead of selling you a training run, because a project built on the wrong premise fails slowly and takes the reference with it. Every package on the site names out loud who it is not for.',
      link: { href: '/services', label: 'Read the four “not a good fit” lines.' },
    },
    {
      body: 'One project at a time. No parallel clients, no queue behind you, no discovering in week six that your delivery slipped because someone else escalated. It is the reason the date I quote is the date you get.',
    },
  ],
  outsideHeading: 'Outside work',
  outside:
    'I study quantum mechanics and differential equations on my own. I read philosophy. I paint. When a topic takes more than an afternoon I write the route down, and those notes are public.',
  outsideLink: { href: '/learning', label: 'Read the study roadmaps' },
  ctaHeading: 'Start with a call',
  ctaBody: 'Tell me what you want to build. I will tell you if I am a fit.',
  resumeLabel: 'CV (PDF)',
} as const
