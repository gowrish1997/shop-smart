import React, { useEffect, useState } from "react";
import "./Postdetail.css";
const PostDetail = ({ allpost }) => {
  return (
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className="max-w-[1200px] h-full  flex flex-col items-start justify-start text-left">
        <div className="box-border flex flex-row w-full justify-end items-center border-y-[1px] border-y-[#e7e6e6] border-y-solid py-[5px] mb-[60px] ">
          <div className="box-border mr-[30px] text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`< Previous`}</div>
          <div className="box-border  text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`Next >`}</div>
        </div>
        <div></div>
        <article className="post">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: allpost[23]?.content?.rendered }}
          ></div>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
