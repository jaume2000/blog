import React from 'react'
import PageWrapper from '../../../components/PageWrapper'

function LearningNotes() {
  return (
    <PageWrapper title="Learning Notes">
        <p>{`In this public Notion website I explore several topics such as differential equations, genomics or deep learning.
            In this last topic I explore more mainly about Computer Vision since it's the field I've specialized in.`}</p>
        <p>{`You can find about Optimization, Image Generation, Object Detection, Semantic Segmentation...`}</p>
        <div className='flex align-middle justify-center my-10'>
            <iframe src="https://proud-coyote-bf3.notion.site/ebd/1d306083754780ffbb44ed01f212f884" width="100%%" height="600" frameBorder="0" allowFullScreen />
        </div>
    </PageWrapper>
  )
}

export default LearningNotes