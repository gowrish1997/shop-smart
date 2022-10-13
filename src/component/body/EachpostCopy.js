
import React, { useEffect, useState } from "react";
import EachPostImage from "./EachPostImage";
import EachPostDate from "./EachPostDate";
import EachPostSummary from "./EachPostSummary";
import { Link } from "react-router-dom";

const Eachpost = ({ eachPostData,index }) => {
  return (
    <div className="box-border flex flex-col mb-[50px] ">
      <div className="box-border flex flex-row flex-wrap md:flex-nowrap justify-start align-baseline">
        <EachPostDate eachPostData={eachPostData}></EachPostDate>
        <EachPostImage eachPostData={eachPostData}></EachPostImage>
        <EachPostSummary eachPostData={eachPostData} index={index}></EachPostSummary>
      </div>
      <div className="box-border  border-b-[1px] border-[#e7e6e6] border-solid mt-[15px] pb-[5px]  ">
        <div className="flex flex-row justify-end items-center  group cursor-pointer ">
         <Link  to={{
                    pathname:`/${eachPostData.slug}/`,
                    state: { index:eachPostData.id,categoriesID:eachPostData.categories },
                  }}> <div className="text-[#141617] leading-[1.72] text-[16px] tracking-[0.015em] font-[400] transition-colors duration-200 ease-in group-hover:text-[#65bd7d] ">
            Read More
          </div></Link>
          <div>
            <i className="fal fa-greater-than fa-xs ml-[5px] transition-colors duration-200 ease-in group-hover:text-[#65bd7d] "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eachpost;
