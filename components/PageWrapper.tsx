import React from 'react'

function PageWrapper({title, children}:{title:string,children:React.ReactNode}) {
  return (
    <div className='w-full'>
        <div className="page_wrapper_header_decoration"/>
        <div className='page_wrapper_header'>
            <h1>{title}</h1>
        </div>
        <div className='page_wrapper_content'>
            {children}
        </div>
    </div>
  )
}

export default PageWrapper