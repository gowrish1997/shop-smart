import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthRelatedPost from "./AuthRelatedPost";
import RelatedPost from "./RelatedPost";
import PostSummary from "./PostSummary";
import PostAuthor from "./PostAuthor";
import Commentcontainer from "./Commentcontainer";
import "./Postdetail.css";
import axios from "axios";
const PostDetail = ({ allPostIds }) => {
  const [postDetail, setpostDetail] = useState(null);
  const [postIndex, setpostIndex] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const index=allPostIds?.findIndex((data)=>data.id==location.state.index)
setpostIndex(index)
axios.get(`https://smartblog.portfolios.digital/wp-json/wp/v2/posts/${allPostIds[index]?.id}`).then((result)=>{
  setpostDetail(result.data)

}).catch((error)=>{
  console.log(error.message)
})

  }, [location]);

  return (
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className="max-w-[1200px] min-h-[100vh] h-full  flex flex-col items-start justify-start text-left leading-[1.2] tracking-[0.015em] ">
        <div className="box-border flex flex-row w-full justify-end items-center border-y-[1px] border-y-[#e7e6e6] border-y-solid py-[5px] mb-[60px] ">
          {postIndex == 0 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allPostIds[postIndex - 1]?.slug}/`,
                state: { index: allPostIds[postIndex - 1]?.id,categoriesID:allPostIds[postIndex - 1]?.categories },
              }}
            >
              <div className="box-border mr-[30px] text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`< Previous`}</div>
            </Link>
          )}
          {postIndex == allPostIds.length - 1 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allPostIds[postIndex + 1]?.slug}/`,
                state: { index: allPostIds[postIndex + 1]?.id,categoriesID:allPostIds[postIndex +1]?.categories },
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
              __html: postDetail?.title?.rendered,
            }}
          ></h1>
          <div
            className="post-content mb-[60px] "
            dangerouslySetInnerHTML={{
              __html:postDetail?.content?.rendered,
            }}
          ></div>
           <RelatedPost post={postDetail?.["jetpack-related-posts"]} ></RelatedPost>
           <PostSummary post={postDetail} ></PostSummary>
           <PostAuthor post={postDetail}></PostAuthor>
          {/* <AuthRelatedPost
            post={postDetail?.author}
            allpost={allpost}
          ></AuthRelatedPost> */}
       <Commentcontainer></Commentcontainer>
        </article>
      </div>
    </div>
  );
};

export default PostDetail;
