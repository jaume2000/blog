export type ServiceId = 'ai-integration' | 'software' | 'ai-training' | 'ai-endpoint'
export type ServiceHighlight = 'frontend' | 'backend' | 'database' | 'aiService' | 'aiTraining' | 'dataset' | 'rawData' | 'cloud'
export interface ServicePackage {
  id: ServiceId
  name: string
  /** One line so a visitor recognises their own situation without comparing packages. */
  forYouIf: string
  summary: string
  description: [string, string]
  deliverables: string[]
  startingPrice: string
  /** Calendar time from kickoff to delivery, one project at a time. */
  timeline: string
  notAFit: string
  highlight: ServiceHighlight[]
}

/** Ordered by how soon a project can realistically start and finish, cheapest first. */
export const SERVICES: ServicePackage[] = [
  {
    id: 'ai-integration',
    name: 'Third-party AI integration',
    forYouIf:
      'You have a product and want AI in it, built on models that already exist. Nothing needs training.',
    summary:
      'Agents and features built on the Anthropic and OpenAI APIs with LangGraph, LangChain or N8N, wired into your product properly.',
    description: [
      'Not every AI feature needs a custom model. Most do not. Calling an existing API is the cheap answer, and when it is the right answer I will say so instead of selling you a training run.',
      'The work is in everything around the call: prompt and agent design, tool wiring, cost control, fallbacks when the provider fails, and evaluation so you find out that quality dropped before your users do. I build these on LangGraph, LangChain and N8N, and I have shipped LLM support bots and internal automations that are in use rather than in a demo.',
    ],
    deliverables: [
      'The AI feature or agent, integrated into your existing product',
      'Prompt and agent design, versioned rather than pasted into code',
      'Cost and rate-limit controls, with fallback behaviour when the provider is down',
      'An evaluation set so you can tell whether a change made things better',
      'Handover documentation for your team',
    ],
    startingPrice: '€4,000',
    timeline: '4 to 8 weeks',
    notAFit:
      'Not a good fit if your problem depends on data only you have. A general-purpose API has never seen it, and no amount of prompting fixes that.',
    highlight: ['aiService', 'backend', 'database', 'cloud'],
  },
  {
    id: 'software',
    name: 'Web and backend development',
    forYouIf:
      'You need the product itself built: interface, backend and database. No AI in this one.',
    summary:
      'Frontend, backend, database and deployment, built by the same person who would build the AI layer later.',
    description: [
      'Custom AI is only worth paying for once someone can actually use it, and that means a real product around it: a screen, an API, a database, a deployment. I build that part on its own too.',
      'The reason to hire me for it rather than a cheaper generalist is what comes next. If you add a model in six months, the person who wrote the product already knows where it plugs in, and you are not paying someone to reverse-engineer their own predecessor.',
    ],
    deliverables: [
      'Frontend, backend and database schema',
      'Deployment and CI, so shipping is not a manual ritual',
      'Test coverage on the paths that would cost you money if they broke',
      'A codebase your future team can pick up',
    ],
    startingPrice: '€7,000',
    timeline: '6 weeks to 3 months',
    notAFit:
      'Not a good fit if you have a product team already and only need extra hands on a ticket queue. Hire a contractor by the hour for that.',
    highlight: ['frontend', 'backend', 'database', 'cloud'],
  },
  {
    id: 'ai-training',
    name: 'Model and dataset, research grade',
    forYouIf:
      'You are a research team, in a lab or inside a company. You need the trained weights and the data behind them, and nothing else.',
    summary:
      'Dataset curation and model training, delivered as weights, code and evaluation. No deployment, no interface.',
    description: [
      'Research does not need an API. It needs a model that is correct, a dataset whose ground truth holds up, and numbers you can defend in a paper or in front of a committee.',
      'I do the part that eats your months: framing the problem as the right kind of learning task, building and annotating the dataset, running the training, and reporting the ablations honestly. You keep the weights, the code and the data, and you publish under your own name.',
    ],
    deliverables: [
      'Curated dataset and the annotation protocol used to build it',
      'Trained model weights',
      'Training and evaluation code, structured so your group can rerun it',
      'Evaluation report with baselines and ablations',
    ],
    startingPrice: '€10,000',
    timeline: '2 to 4 months',
    notAFit:
      'Not a good fit if you need the model serving real users. That is the package below, and retrofitting deployment later costs more than including it now.',
    highlight: ['rawData', 'dataset', 'aiTraining'],
  },
  {
    id: 'ai-endpoint',
    name: 'Custom AI, trained and deployed',
    forYouIf:
      'The model you need does not exist yet, and it has to run in production — not in a notebook.',
    summary:
      'I build the dataset, train the model, and ship it behind an API with monitoring and a pipeline you can rerun.',
    description: [
      'A notebook that scores well is not a product. Most custom AI work dies between the last cell of the notebook and the first real user, because getting there needs data engineering, infrastructure and API design, and those are three different vendors on most projects.',
      'Here they are one person. I curate the dataset, define the metric with you, train the model, and deploy it as a service your product can call. You get something you can operate after I leave, not a checkpoint and a README.',
    ],
    deliverables: [
      'Curated and annotated dataset, with the annotation protocol written down',
      'Trained model, evaluated against the metric we agreed on before starting',
      'Inference API, containerised and deployed to your cloud',
      'Training pipeline you can rerun when your data changes',
      'Monitoring: latency, error rate, and a drift signal',
    ],
    startingPrice: '€16,000',
    timeline: '4 to 6 months',
    notAFit:
      'Not a good fit if an existing API already solves your problem, or if nobody on your side is willing to invest in the data. The dataset is the hard part and it cannot be skipped.',
    highlight: ['rawData', 'dataset', 'aiTraining', 'aiService', 'backend', 'cloud'],
  },
]
