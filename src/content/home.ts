export interface HomeLink {
  href: string
  label: string
}

export interface ResearchItem {
  title: string
  period?: string
  body: string
  link?: HomeLink
}

export interface Idea {
  body: string
  link?: HomeLink
}

export const HOME = {
  greeting: 'Hi, I am Jaume.',
  intro: [
    'I build things and I try to understand why they work. I grew up in Gata de Gorgos, moved to Valencia at seventeen to study Computer Science and then a master’s in AI, and stayed.',
    'Today I am cofounder and CTO of Mycrospace, where we teach computers to read microbiology plates. Outside of that I read papers, philosophy and sci-fi, study physics on my own, train calisthenics, and write down whatever I cannot stop thinking about.',
  ],
  aboutLink: { href: '/about', label: 'More about me' },

  researchHeading: 'Research',
  researchIntro:
    'Mostly computer vision, with a habit of going back to first principles: train it from scratch, find out what breaks, reformulate the problem when the standard one stops making sense.',
  research: [
    {
      title: 'Residual networks as ODEs',
      period: '2026 – now',
      body: 'Reading ConvNeXt, Swin and ResNet as Euler steps of a differential equation. Pretrained networks can be integrated with 128× more steps without fine-tuning, one shared block can replace a whole stage, and the straight trajectories turn out to be a single massive channel.',
      link: { href: '/research/delta-neural-ode', label: 'Read the write-up' },
    },
    {
      title: 'Counting what cannot be separated',
      period: '2024 – now',
      body: 'Automatic colony counting on microbiology plates, which started as my master’s thesis and became Mycrospace. Detectors work until roughly 300 overlapping colonies, then stop separating instances at all, so for crowded plates I reformulated counting as density estimation with Bayesian priors.',
      link: { href: '/work#mycrospace', label: 'Read the case' },
    },
    {
      title: 'ConvNeXt-V1 from scratch',
      body: 'ConvNeXt-Tiny trained from scratch on ImageNet-1k on the Leonardo supercomputer, reaching 81% top-1 with my own training framework. Ongoing on top of that baseline: locating redundant parameters, and reparametrising residual blocks read as steps of an ODE solver.',
      link: { href: 'https://github.com/jaume2000/convnext_v1', label: 'Code on GitHub' },
    },
    {
      title: 'Brain MRI segmentation',
      period: '2025 – 2026',
      body: 'At MIALAB (UPV): volumetric brain MRI segmentation with nnU-Net and inference-pipeline optimisation for the VolBrain platform. Scarce data, contested ground truth, and nobody accepts a number without an error bar.',
    },
  ] satisfies readonly ResearchItem[],

  reflectionsHeading: 'Reflections',
  reflectionsIntro:
    'Essays on consciousness, God, AI and what it is doing to society, and on my own relationship with technology.',
  reflectionsLink: { href: '/blog', label: 'All posts' },

  ideasHeading: 'Ideas I keep coming back to',
  ideas: [
    {
      body: 'Freedom is not doing whatever you want. It is having the knowledge and the discipline to be able to choose any option, and then choosing to give something to others.',
    },
    {
      body: 'Consciousness may not be a property of a brain but of computation unfolding in time, which is why we experience a past, a present and a future instead of everything at once.',
      link: { href: '/blog/conscious_paper', label: 'Is a rock conscious?' },
    },
    {
      body: 'When AI absorbs most middle-class work, the risk is not unemployment alone but a new feudalism, where whoever owns the models owns the economy.',
      link: { href: '/blog/technofeudalism', label: 'Technofeudalism' },
    },
    {
      body: 'A recommender optimised for engagement is a measurement of us, and it converged on hate. That says something uncomfortable about what holds our attention.',
      link: { href: '/blog/hate_love_and_math', label: 'Hate, love and math' },
    },
    {
      body: 'A deep residual network is a discretised differential equation. Taking that literally should tell us which layers we do not need.',
    },
  ] satisfies readonly Idea[],

  learningLink: { href: '/learning', label: 'My study roadmaps' },
  freelanceHeading: 'Working together',
  freelanceBody:
    'I also take one freelance project at a time: I train custom AI models, put them in production, and build the product around them.',
  freelanceLink: { href: '/freelance', label: 'See freelance work' },
} as const
