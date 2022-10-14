import React from "react";

import RelatedPostDetail from "./RelatedPostDetail";
const RelatedPost = ({ post }) => {

  return (
    <div className="mb-[40px]">
      <div className="font-[700] text-[12pt] mb-[10px]  ">Related</div>
      <div className="flex flex-row flex-wrap justify-between items-baseline ">{
        post?.slice(0,3).map((data,index)=>{
            return <RelatedPostDetail key={index} data={data}></RelatedPostDetail>
        })
        }</div>
    </div>
  );
};

export default RelatedPost;
