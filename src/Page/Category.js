import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PaginatedItems from "../component/body/Pagination";
import Skeleton from "../Customhook/MaterialUiskeleton";
function Category() {
  const location = useLocation();

  const categoryId = location?.state?.categoryId;
  const { data, isLoading, isFetching } = useQuery(
    ["fruits", location?.state?.pageIndex, categoryId],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/posts?page=${
          location?.state?.pageIndex + 1
        }&categories=${categoryId}`
      );
    },
    { keepPreviousData: true }
  );

  if (isLoading){
    return <Skeleton></Skeleton>
  }

  return (
    <>
      <PaginatedItems
        allpost={data?.data}
        totalData={data?.headers?.["x-wp-total"]}
        itemsPerPage={10}
      ></PaginatedItems>
    </>
  );
}
export default Category;
