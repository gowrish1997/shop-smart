import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PostDetail from "./PostDetail";
const IndividualPost = () => {
  const { data, isLoading } = useQuery(
    "IndividualPost",
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100&_fields=id,slug,categories
        }`
      );
    },
    { keepPreviousData: true }
  );
  return (
    <div>
      <PostDetail allPostIds={data?.data}></PostDetail>
    </div>
  );
};

export default IndividualPost;
