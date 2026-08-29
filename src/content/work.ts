import { SITE } from './site'

export interface WorkCase {
  slug: string
  title: string
  /** Only cases with a hard number get a card on the home page. */
  homeMetric?: { number: string; label: string }
  link?: { href: string; label: string }
  context: string[]
  built: string[]
  decisions: string[]
  result: string[]
}

export const WORK_CASES: WorkCase[] = [
  {
    slug: 'mycrospace',
    title: 'Mycrospace',
    homeMetric: { number: '5', label: 'laboratories running it in production' },
    link: { href: SITE.mycrospaceUrl, label: 'mycrospace.es' },
    context: [
      'Microbiology labs still count colonies by hand. A lab can process hundreds of plates a day. Manual counting is slow, error-prone, and hard to scale. The data ends up on paper.',
      'It started in 2024 as my master’s thesis, which was awarded honours and then turned into a company; Mycrospace was incorporated in January 2026. I am cofounder and CTO, and I supervise a full-stack developer.',
      'Five laboratories run it in production today as launch collaborations, which means we harden the product with them rather than at them.',
    ],
    built: [
      'The whole stack. Inference workers on BullMQ and Redis, a NestJS and Prisma API over PostgreSQL, a Next.js web client, a React Native app for use at the bench, Stripe for billing and PostHog for product analytics.',
      'It ran on GCP until the bill outgrew the traffic, then moved to Hetzner with Dokploy. That move is the kind of decision I get hired for: the same product, a fraction of the monthly cost, because someone was watching the invoice as well as the metrics.',
      'A lab photographs a plate and gets counts and analysis in seconds. I own the path from the training run to the screen a microbiologist actually uses.',
    ],
    decisions: [
      'Detection originally ran on Ultralytics, which is AGPL-3.0 and therefore rules itself out for a closed SaaS. So we rebuilt it: the detector starts from the YOLO family of architectures, carries our own modifications, and is trained from scratch on our own data, on a base we can actually license. Licensing is an engineering constraint, not a legal afterthought.',
      'Colony detection sits at 67 mAP50-95, the strict localisation metric. Against counts from expert microbiologists, the product reaches 95% median accuracy. Two different questions: how well the boxes land, and how close the final number is to what a specialist would have written down.',
      'Crowded plates are the hard case. Past roughly 300 overlapping colonies the detector stops separating instances at all, so for that regime I reformulated counting as density estimation and trained density-map regressors with Bayesian priors.',
      'We shot our own corpus of 5,000 plate images across 12 microbial species and annotated 1,500 of them, under protocols written with microbiologists and using custom weakly-supervised labelling tools. The tooling is the reason the annotation budget went as far as it did.',
      'More than 3,000 GPU-hours of training on Leonardo, under two compute allocations won through competitive EuroHPC calls in computational biology.',
    ],
    result: [
      'About 20× faster than manual colony counting, and about 30 seconds per plate from photo to results.',
      '1st prize at the IdeasUPV startup competition in 2024, with a €2,500 grant.',
    ],
  },
  {
    slug: 'tapstar',
    title: 'Tapstar',
    context: [
      'Freelance engagement, January to May 2025.',
      'Tapstar sells QR cards and stands to restaurants, shoe shops and other high-street businesses. They had the physical product. What they did not have was the software that makes a piece of printed plastic worth paying for.',
    ],
    built: [
      'QR generation, the back office where a client manages their own products, the customer-facing frontend, and the SEO.',
      'The analytics layer behind every scan: who is behind it, and ratings broken down per employee.',
    ],
    decisions: [
      'The scan is not a redirect, it is where the data starts. Treating it as an analytics event rather than a link is what turns a QR card from a novelty into something a shop owner checks on Monday morning.',
      'Per-employee ratings were the feature that made the product defensible. A generic QR menu is a commodity; a QR card that tells a restaurant which of its waiters customers are happy with is not.',
      'One engineer across frontend, back office, QR pipeline and SEO. For a company at that size, coordinating three specialists would have cost more than the software.',
    ],
    result: [
      'Shipped and handed over inside the engagement window.',
      'This is the case to read if you are hiring me for the web and backend package rather than for a model.',
    ],
  },
  {
    slug: 'vesta-z',
    title: 'Vesta-Z',
    context: [
      'Freelance engagement, 2023.',
      'Vesta-Z runs a cloud product for parts of tractors, trucks and other construction equipment. The catalogue is the business, and the catalogue has a data problem: the same physical part is named, coded and described differently by every provider that sells it.',
    ],
    built: [
      'A database schema, designed and implemented from scratch, for cross-matching the same item across different providers.',
      'Full-stack feature work on the cloud product, plus SEO for the parts catalogue.',
      'An LLM support bot for their users.',
    ],
    decisions: [
      'The cross-matching problem is a data-modelling problem before it is an AI problem. Getting the schema right meant the matching could be reasoned about and corrected, instead of being a black box nobody trusted.',
      'SEO on a parts catalogue is not marketing decoration. When customers search for a part number, the catalogue page either exists and ranks or the sale goes to a competitor.',
    ],
    result: [
      'Schema in production, feature work shipped, support bot live for their users.',
      'The reason it is here: the same person did the data modelling, the product features and the LLM integration. That is the shape of most of my client work.',
    ],
  },
  {
    slug: 'convnext-leonardo',
    title: 'ConvNeXt-V1 from scratch on Leonardo',
    homeMetric: {
      number: '81%',
      label: 'top-1 on ImageNet-1k, trained from scratch on 4 GPUs',
    },
    link: {
      href: 'https://github.com/jaume2000/convnext_v1',
      label: 'github.com/jaume2000/convnext_v1',
    },
    context: [
      'Not client work. This one is mine, and it is here because clients hesitate to fund large training runs: the cost, the time, and the things that only break at scale.',
      'So I did one and published it. ConvNeXt-Tiny, 30M parameters, trained from scratch on ImageNet-1k for 300 epochs on Leonardo Booster at CINECA, reaching 81% top-1 with timm augmentation. It replicates the original paper, and that is exactly the point: it is a baseline I own and understand rather than a checkpoint I downloaded.',
    ],
    built: [
      'My own training framework, not the timm script. Writing it is what makes the run useful to me: when something goes wrong at hour 200, I know which line to look at.',
      'Four GPUs on Leonardo Booster, with a reproducible setup and a cost envelope fixed before the first job was submitted. The code is public.',
    ],
    decisions: [
      'From-scratch training, not a fine-tune of a public checkpoint. That is the run clients hesitate to fund, because the bill and the failure modes are real rather than theoretical.',
      'Leonardo kills jobs at 12 hours of wall clock, which is nowhere near a 300-epoch run. So the training is not one job, it is a chain of jobs, each resuming from checkpoint. That makes checkpoint and resume the critical path rather than an afterthought: everything that has to survive a restart — optimizer state, learning-rate schedule position, data order, augmentation seeds — has to be saved and restored correctly, because a silent error there costs you days and does not announce itself.',
      'This is the part worth hiring for. Anyone can launch a training job. Finishing one on shared infrastructure that keeps interrupting you is a different skill.',
    ],
    result: [
      '81% top-1 accuracy on ImageNet-1k, matching the reference implementation.',
      'Still ongoing on top of that baseline: locating redundant parameters, and reparametrising residual blocks read as steps of an ODE solver.',
    ],
  },
]

export const HOME_WORK_CASES = WORK_CASES.filter((workCase) => workCase.homeMetric)
