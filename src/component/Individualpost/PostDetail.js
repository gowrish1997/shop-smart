import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthRelatedPost from "./AuthRelatedPost";
import RelatedPost from "./RelatedPost";
import "./Postdetail.css";
const PostDetail = ({ allpost }) => {
  const [postIndex, setPostIndex] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setPostIndex(location.state.index);
  }, [location]);

  return (
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className="max-w-[1200px] h-full  flex flex-col items-start justify-start text-left">
        <div className="box-border flex flex-row w-full justify-end items-center border-y-[1px] border-y-[#e7e6e6] border-y-solid py-[5px] mb-[60px] ">
          {postIndex == 0 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allpost[postIndex - 1]?.slug}/`,
                state: { index: postIndex - 1 },
              }}
            >
              <div className="box-border mr-[30px] text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`< Previous`}</div>
            </Link>
          )}
          {postIndex == allpost.length - 1 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allpost[postIndex + 1]?.slug}/`,
                state: { index: postIndex + 1 },
              }}
            >
              <div className="box-border  text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`Next >`}</div>
            </Link>
          )}
        </div>

        <article className="post">
          <h1
            className=" box-border text-[#141617] text-[36px] mb-[28px] font-[600]  "
            dangerouslySetInnerHTML={{
              __html: allpost[postIndex]?.title?.rendered,
            }}
          ></h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: allpost[postIndex]?.content?.rendered,
            }}
          ></div>
           <RelatedPost post={allpost[postIndex]["jetpack-related-posts"]} ></RelatedPost>
          <AuthRelatedPost
            post={allpost[postIndex]?.author}
            allpost={allpost}
          ></AuthRelatedPost>
         
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
