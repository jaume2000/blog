import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work Experience',
  description: 'Jaume Ivars Grimalt — Professional work experience and roles',
  robots: { index: true, follow: true },
}

function WorkExperience() {
  return (
    <PageWrapper title="Work experience">
      <p>
        A summary of my professional experience—from biotech and medical imaging to ML research and data science internships.
      </p>

      <h2>Mycrospace — Biotech Startup</h2>
      <h3>Co-Founder & CTO · Valencia, Spain · Jan. 2024 – Present</h3>
      <ul>
        <li>Formulated the high-density colony counting problem (&gt;300 overlapping colonies per plate) as a density estimation task and designed proprietary Density Map Regressors with Bayesian priors.</li>
        <li>Designed and trained Object Detection models, achieving 95% median accuracy against expert microbiologist annotations.</li>
        <li>Built complete production system end-to-end: PyTorch training framework, data pipelines, containerized inference (Docker/GCP), REST APIs (NestJS/Prisma), and user-facing web application (Next.js/TypeScript).</li>
        <li>Curated domain-specific dataset of 3,500 annotated images across 12 microbial species; co-designed annotation protocols with microbiologists to ensure ground-truth integrity.</li>
        <li>Delivered full-stack ML product from concept to deployment, owning model design, training infrastructure, API development, database architecture, and frontend implementation.</li>
      </ul>

      <h2>MIALAB — Medical Imaging Analysis Laboratory, UPV</h2>
      <h3>Research Engineer · Valencia, Spain · May 2025 – Jan 2026</h3>
      <ul>
        <li>Trained and evaluated nnU-Net models for volumetric brain MRI segmentation, experimenting with different multi-scale feature extraction strategies.</li>
        <li>Contributed to optimizing the inference pipeline for the VolBrain platform (which contains 700k+ MRI volumes), analyzing bottlenecks in data flow from NIfTI ingestion to voxel-level predictions.</li>
        <li>Established systematic experiment tracking and modular code architecture, enabling reproducible ablation studies and standardized evaluation for the research group.</li>
      </ul>

      <h2>Neurocatching</h2>
      <h3>ML Engineer Intern (Industrial Bachelor&apos;s Project) · Valencia, Spain · 2022 – 2023</h3>
      <ul>
        <li>Built ML models for temporal gaze-pattern analysis: extracted features from raw ocular movement sequences, designed predictive pipelines, and evaluated against behavioural ground truth.</li>
      </ul>

      <h2>Sciling</h2>
      <h3>Data Science Intern · Valencia, Spain · 2022</h3>
      <ul>
        <li>Early exposure to large language models (GPT-2/3) and Diffusion Models; contributed to applied NLP and generative modelling projects.</li>
      </ul>
    </PageWrapper>
  )
}

export default WorkExperience
