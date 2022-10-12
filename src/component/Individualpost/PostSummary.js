import React from 'react'
import EachPostCatAutDatCom from '../body/EachPostCatAutDatCom'
const PostSummary = ({post}) => {
  return (
    <div className='box-border border-y-[1px] border-y-[#e7e6e6] border-y-solid flex flex-row items-center py-[5px] mb-[60px]  '>
    <EachPostCatAutDatCom eachPostData={post} ></EachPostCatAutDatCom>
    </div>
  )
}

export default PostSummary