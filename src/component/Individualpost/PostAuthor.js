import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
const PostAuthor = ({ post }) => {

  const { data, isLoading } = useQuery(
    ["fruits", post],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${post?.author}`);
    },
    { keepPreviousData: true }
  );
  return (
    <div className="box-border mb-[60px] ">
      <div className=" box-border text-[20px] font-bold mb-[20px]">{`About the Author:${data?.data?.name}`}</div>
      <div className="max-w-[90px] max-h-[90px] box-border rounded-full">
        <img
          className="w-full h-full rounded-full   "
          src={data?.data?.avatar_urls["96"]}
        ></img>
      </div>
    </div>
  );
};

export default PostAuthor;
