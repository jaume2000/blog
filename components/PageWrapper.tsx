import Link from 'next/link'
import React from 'react'
import {Undo2} from 'lucide-react'

function PageWrapper({title, children}:{title:string,children:React.ReactNode}) {
  return (
    <div className='w-full'>
        <div className="page_wrapper_header_decoration p-2">
          <Link href="/"><Undo2 /></Link>
        </div>
        <div className='page_wrapper_header'>
            <h1>{title}</h1>
        </div>
        <div className='page_wrapper_content'>
            {children}
        </div>
        <div className='w-full h-64'>

        </div>
    </div>
  )
}

export default PageWrapper
