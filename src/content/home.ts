export interface HomeLink {
  href: string
  label: string
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
  researchLink: { href: '/research', label: 'All research' },

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
