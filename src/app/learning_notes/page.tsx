import React from 'react'
import PageWrapper from '../../../components/PageWrapper'

function LearningNotes() {
  return (
    <PageWrapper title="Learning Notes">
        <p>{`In this public Notion website I explore several topics such as differential equations, genomics or deep learning.
            In this last topic I explore more mainly about Computer Vision since it's the field I've specialized in.`}</p>
        <p>{`You can find about Optimization, Image Generation, Object Detection, Semantic Segmentation...`}</p>
        <div className=' md:max-w-3/4 xl:max-w-1/2 w-full m-auto'>
          <div className='align-middle justify-center my-10'>
              <iframe src="https://proud-coyote-bf3.notion.site/ebd/1d306083754780ffbb44ed01f212f884" width="100%" height="800" frameBorder="0" allowFullScreen />
          </div>
          <div className='flex align-middle justify-center my-10'>
            <iframe src="https://proud-coyote-bf3.notion.site/ebd/1b706083754780928dedf1a01822a540" width="100%" height="800" frameBorder="0" allowFullScreen />
          </div>
          <div className='flex align-middle justify-center my-10'>
            <iframe src="https://proud-coyote-bf3.notion.site/ebd/6e4752deae6344a3988e479d2cc61712?v=b23a2cad63c0430fbfdbb08024c08c9a" width="100%" height="800" frameBorder="0" allowFullScreen />
          </div>
        </div>
    </PageWrapper>
  )
}

export default LearningNotes