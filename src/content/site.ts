export const SITE = {
  name: 'Jaume Ivars',
  fullName: 'Jaume Ivars Grimalt',
  email: 'jaume@jaumeivars.com',
  calendarUrl: 'https://cal.com/jaume2000/consultoria-jaume',
  calendarLabel: 'Book a call',
  linkedinUrl: 'https://www.linkedin.com/in/jaume-ivars-grimalt/',
  linkedinLabel: 'LinkedIn',
  githubUrl: 'https://github.com/jaume2000',
  githubLabel: 'GitHub',
  location: 'Valencia',
  ogImage: '/photo.jpeg',
  photo: '/photo.jpeg',
  resumeUrl: '/resume.pdf',
  mycrospaceUrl: 'https://mycrospace.es',
} as const

export const HOME_COPY = {
  headline: 'Train the model, ship the product.',
  subhead:
    'I train your custom AI model, put it in production, and build the interface your users open every day.',
  // Recommendation, on whether to rewrite this section or delete it: rewrite, which is
  // what this is. Deleting it makes the home jump from the headline straight into the
  // services grid, and the visitor never reads a sentence about their own situation
  // before being sold to. /services describes the packages; this section is the only
  // place that names the failure the buyer already recognises. It earns its space as
  // long as it talks about them and not about me.
  problemTitle: 'Why these projects stall',
  problem: [
    'You have data. What you do not have is a labelled dataset a model can learn from, and nobody wants to own that part, so the project stalls before training starts.',
    'A general-purpose API cannot help, because the thing you need recognised only exists in your own data and no public model has ever seen it.',
    'The model scores well in a notebook and nowhere else. Putting it behind an API with monitoring is a separate job, and it is the one that never got scoped.',
    'It finally runs, and your team still cannot use it, because there is no screen. So it goes back on the shelf.',
  ],
  servicesTitle: 'Services',
  workTitle: 'Selected work',
  availabilityTitle: 'Availability',
  availability:
    'Scoped contracts, fixed price, remote from Valencia across EU and US timezones. I take one project at a time, which is why the delivery date I quote is the date you get. I am also cofounder and CTO of Mycrospace — that is where the production experience comes from, and it is the reason I will not run two client projects in parallel.',
  ctaTitle: 'Start with a call',
  ctaBody: 'Tell me what you want to build. I will tell you if I am a fit.',
} as const

export const META = {
  homeTitle: 'Jaume Ivars — Train the model, ship the product',
  homeDescription:
    'I train your AI model, put it in production, and build the interface your people use. ML, backend, infra, frontend, and mobile — one person, the full cycle.',
  servicesTitle: 'Services',
  servicesDescription:
    'Four ways to work together: third-party AI integration, web and backend development, research-grade models and datasets, or custom AI trained and deployed. From €4,000.',
  workTitle: 'Work',
  workDescription:
    'Case studies: Mycrospace, a biotech AI product I built as CTO and that five laboratories run in production, and ConvNeXt-V1 trained from scratch to 81% top-1 on ImageNet-1k at EuroHPC Leonardo.',
  aboutTitle: 'About',
  aboutDescription:
    'ML engineer and CTO of Mycrospace. I train models, deploy them, and build the product around them. Remote from Valencia.',
  learningTitle: 'Learning roadmaps',
  learningDescription:
    'Study roadmaps for computer vision and deep learning: CNN and transformer detectors, foundational image models, modern LLMs, diffusion models, and quantum mechanics.',
  blogTitle: 'Blog',
  blogDescription: 'Writing by Jaume Ivars.',
} as const
