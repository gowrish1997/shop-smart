import React from 'react'
import { Link } from 'react-router-dom'

const RelatedPostDetail = ({data}) => {
  
  return (
    <div className=' box-border flex flex-col flex-wrap justify-start items-start max-w-[400px]  '>
        <Link> <div className='font-[400] leading-[20px] hover:text-[#65bd7d] hover:underline' dangerouslySetInnerHTML={{__html:data?.title}}></div></Link>
        <div className='opacity-[0.6] leading-[20px] '>
        {`${new Date(data?.date).toLocaleString("default", {
          month: "long",
        })} ${new Date(data?.date).getDate()} ${new Date(
          data?.date
        ).getFullYear()}  \u00A0  `}
      </div>
        <div className='opacity-[0.6] leading-[20px] ' dangerouslySetInnerHTML={{__html:data?.context}}></div>
    </div>
  )
}

export default RelatedPostDetail