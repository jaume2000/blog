import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My projects',
  description: 'Mycrospace — AI for microbiology. Colony counting and antibiogram analysis.',
  robots: {
    index: true,
    follow: true,
  },
}

function Projects() {
  return (
    <PageWrapper title="Mycrospace, my current project">
      <h2>Mycrospace</h2>
      <p>
        <a href="https://mycrospace.es" target="_blank" rel="noopener noreferrer">Mycrospace</a> is a biotech startup I co-founded in early 2024. I lead as CTO, and together with my co-founder we&apos;re building the first AI-powered platform for microbiology labs: from plate to report.
      </p>

      <h3>The problem</h3>
      <p>
        Thousands of researchers still count colonies by hand. A single lab can process hundreds of plates per day—each with dozens or hundreds of colonies—and manual counting is slow, error-prone, and hard to scale. Data ends up on paper, reports are tedious to compile, and human error can compromise the quality of the research.
      </p>

      <h3>What we built</h3>
      <p>
        We built a full-stack product so labs can photograph a plate and get counts and analysis in seconds. The core challenge was high-density colony counting: when hundreds of colonies overlap on one plate, simple detection isn&apos;t enough. I formulated the problem as density estimation and designed proprietary Density Map Regressors with Bayesian priors, and separately trained Object Detection models that reach 95% median accuracy against expert microbiologist annotations.
      </p>
      <p>
        On the engineering side, I own the whole pipeline: PyTorch training framework, data pipelines, containerized inference on GCP, REST APIs (NestJS, Prisma), and the user-facing web app (Next.js, TypeScript). We also curated a domain-specific dataset of 3,500 annotated images across 12 microbial species and co-designed annotation protocols with microbiologists to keep ground truth reliable.
      </p>

      <h3>In numbers</h3>
      <ul>
        <li><strong>~20× faster</strong> than manual colony counting</li>
        <li><strong>95%</strong> precision in detection and classification</li>
        <li><strong>~30 seconds</strong> per plate from photo to results</li>
      </ul>

      <h3>Recognition</h3>
      <p>
        In 2024 we won 1st Prize at the IdeasUPV Startup Competition, with a €10,000 grant for biotech innovation.
      </p>

      <p>
        If you run or work in a microbiology lab and want to see how it could fit your workflow, you can explore the product and get in touch at <a href="https://mycrospace.es" target="_blank" rel="noopener noreferrer">mycrospace.es</a>.
      </p>
    </PageWrapper>
  )
}

export default Projects
