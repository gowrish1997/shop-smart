import React from 'react'
import EachPostImage from '../body/EachPostImage'
const AuthRelatedPostDetail = ({authrRalatedPost}) => {

  return (
    <div className="box-border flex flex-row flex-wrap ">{
        authrRalatedPost?.slice(0,4).map((data)=>{
            return <EachPostImage eachPostData={data}></EachPostImage>
        })
        }</div>
  )
}

export default AuthRelatedPostDetail