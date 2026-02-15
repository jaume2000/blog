import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Recommendations',
  description: 'Books and papers recommended by Jaume Ivars Grimalt for deep learning, maths and biotech.',
  robots: { index: true, follow: true },
}

function learning_recomendations() {
  return (
    <PageWrapper title="Learning Recommendations">
      <p>
      I am building this! Meanwile you can check my larning notes
      </p>
      </PageWrapper>
  )
}

export default learning_recomendations