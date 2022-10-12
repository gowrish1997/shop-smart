import React, { useEffect, useState } from 'react'
import AuthRelatedPostDetail from './AuthRelatedPostDetail'
const AuthRelatedPost = ({post,allpost}) => {
const [authrRalatedPost,setauthRelatedPosts]=useState(null)
useEffect(()=>{
   const posts=allpost?.filter((postdata,index)=>{
    return postdata?.author==post
   })
  setauthRelatedPosts(posts)
},[post,allpost])
  return (
    <div className='box-border flex flex-col  ' >
      <div className='box-border text-[20px] mb-[20px] font-[600] '>Related Post</div>
      <AuthRelatedPostDetail authrRalatedPost={authrRalatedPost}></AuthRelatedPostDetail>
    </div>
  )
}

export default AuthRelatedPost