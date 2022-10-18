import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import AuthRelatedPost from "./AuthRelatedPost";
import RelatedPost from "./RelatedPost";
import PostSummary from "./PostSummary";
import PostAuthor from "./PostAuthor";
import Commentcontainer from "./Commentcontainer";
import "./Postdetail.css";

const PostDetail = ({ allPostIds }) => {
  const [postDetail, setpostDetail] = useState(null);
  const [postIndex, setpostIndex] = useState(null);
  const location = useLocation();

  const { data, isLoading, isError } = useQuery(
    ["postdetail", location, allPostIds],
    () => {
      const index = allPostIds?.findIndex(
        (data) => data.id == location?.state?.index
      );
      setpostIndex(index);
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/posts/${allPostIds?.[index]?.id}`
      );
    },
    { keepPreviousData: true }
  );
  console.log(isLoading);
  return (
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className="max-w-[1200px] min-h-[100vh] h-full  flex flex-col items-start justify-start text-left leading-[1.2] tracking-[0.015em] ">
        <div className="box-border flex flex-row w-full justify-end items-center border-y-[1px] border-y-[#e7e6e6] border-y-solid py-[5px] mb-[60px] ">
          {postIndex == 0 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allPostIds?.[postIndex - 1]?.slug}/`,
                state: {
                  index: allPostIds?.[postIndex - 1]?.id,
                  categoriesID: allPostIds?.[postIndex - 1]?.categories,
                },
              }}
            >
              <div className="box-border mr-[30px] text-[17px] hover:text-[#65bd7d] cursor-pointer ">{`< Previous`}</div>
            </Link>
          )}
          {postIndex == allPostIds?.length - 1 ? (
            ""
          ) : (
            <Link
              to={{
                pathname: `/${allPostIds?.[postIndex + 1]?.slug}/`,
                state: {
                  index: allPostIds?.[postIndex + 1]?.id,
                  categoriesID: allPostIds?.[postIndex + 1]?.categories,
                },
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
              __html: data?.data?.title?.rendered,
            }}
          ></h1>
          <div
            className="post-content mb-[60px] "
            dangerouslySetInnerHTML={{
              __html: data?.data?.content?.rendered,
            }}
          ></div>
          <RelatedPost
            post={data?.data?.["jetpack-related-posts"]}
          ></RelatedPost>
          <PostSummary post={data?.data}></PostSummary>
          <PostAuthor post={data?.data}></PostAuthor>
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
