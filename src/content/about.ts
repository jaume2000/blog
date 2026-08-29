export const ABOUT = {
  title: 'About',
  lead: 'I train models, put them in production, and build the interface people use. You hire me when you want that whole path owned by one person.',
  sections: [
    {
      heading: 'Why you can trust this',
      paragraphs: [
        'I am CTO and cofounder of Mycrospace, a biotech/AI company in Valencia. I did not join a team that already had a stack. I built the stack: mobile apps, web, backend, infrastructure, and the ML pipeline.',
        'I have trained vision models from scratch on European supercomputing, on two compute allocations won through competitive EuroHPC calls. That is a different job from fine-tuning a public checkpoint. It is the job clients are afraid to fund because the cost and the failure modes are real.',
        'The width is the product. ML, backend, infra, frontend, mobile. You do not coordinate three vendors. That is why the work costs more than a specialist ticket.',
      ],
    },
  ],
  trackHeading: 'Where I have done this',
  trackLead:
    'Six engagements, two of them as a freelancer shipping for someone else’s business, and in most of the rest the work was computer vision on data that mattered to somebody.',
  track: [
    {
      org: 'Mycrospace',
      role: 'Cofounder & CTO',
      period: '2024 – present',
      note: 'Computer vision for microbiology, in production in five laboratories. Detector rebuilt from the YOLO family on a licence we can actually ship, density-map regressors with Bayesian priors for crowded plates, and the whole product around them: inference workers, API, web client, mobile app, billing, infrastructure.',
    },
    {
      org: 'MIALAB — Medical Imaging Analysis Laboratory, UPV',
      role: 'ML Engineer, part-time',
      period: 'May 2025 – Jan 2026',
      note: 'nnU-Net models for volumetric brain MRI segmentation, comparing multi-scale feature-extraction strategies. Profiled the inference pipeline for VolBrain, which has processed more than 700,000 MRI volumes, from NIfTI ingest to voxel-level prediction.',
    },
    {
      org: 'Tapstar',
      role: 'Freelance full-stack engineer',
      period: 'Jan 2025 – May 2025',
      note: 'Tapstar sells QR cards and stands to restaurants and high-street shops. I built the software around them: QR generation, the back office where a client manages products, the frontend, the SEO, and the analytics behind each scan, including ratings broken down per employee.',
    },
    {
      org: 'Vesta-Z',
      role: 'Freelance data engineer',
      period: '2023',
      note: 'Feature work on their cloud product plus SEO for parts of tractors, trucks and construction equipment. Designed and implemented a database schema for cross-matching the same item across different providers, and built an LLM support bot for their users.',
    },
    {
      org: 'Neurocatching',
      role: 'ML Engineer',
      period: '2022 – 2023',
      note: 'Temporal models over raw ocular-movement sequences, evaluated against behavioural ground truth.',
    },
    {
      org: 'Sciling',
      role: 'AI Consultant',
      period: '2022',
      note: 'AI consulting for external clients: conversational systems on GPT-3-era models, applied NLP, and generative models. This is where I learned that the hard part of client work is scope, not architecture.',
    },
  ],
  educationHeading: 'Education & awards',
  education: [
    {
      degree: 'M.Sc. in Artificial Intelligence, Computer Vision & Digital Image',
      school: 'Universitat Politècnica de València',
      period: '2023 – 2024',
      note: 'GPA 8.7/10. The thesis was awarded honours, and then it became Mycrospace. Focus on deep learning theory, attention mechanisms, semantic segmentation and medical image analysis.',
    },
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Universitat Politècnica de València',
      period: '2019 – 2023',
      note: 'GPA 8.3/10, with honour mentions in Machine Learning and Statistics. Elective focus on linear algebra, numerical methods and probability theory.',
    },
    {
      degree: '1st prize, IdeasUPV startup competition',
      school: 'Mycrospace · €2,500 grant',
      period: '2024',
      note: 'Awarded for the biotech product that came out of the master’s thesis.',
    },
  ],
  sectionsAfter: [
    {
      heading: 'Background, short',
      paragraphs: [
        'I grew up in Gata de Gorgos and have lived independently in Valencia since I was 17.',
        'Before Mycrospace I helped run SparkEd, a student-built series of events that brought in more than 300 people. That is how I met my cofounder. It is also how I learned to finish things with other humans, not only with GPUs.',
      ],
    },
    {
      heading: 'How I work',
      paragraphs: [
        'Short contracts. Clear scope. Remote. I say no when the problem does not need a model, or when you already have a product team and only need a model dumped over the wall.',
        'I write things down. I prefer a number to a vibe. If I cannot name the metric, I will not start the training run.',
      ],
    },
  ],
  learningHeading: 'Learning roadmaps',
  learningLead:
    'I write study roadmaps for the topics I have had to learn properly rather than skim, from CNN detectors to diffusion models.',
  learningLinkLabel: 'Read the roadmaps',
  resumeLabel: 'CV (PDF)',
} as const
