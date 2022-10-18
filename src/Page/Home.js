import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PaginatedItems from "../component/body/Pagination";
import Skeleton from "../Customhook/MaterialUiskeleton";
function Home() {
  const location = useLocation();

  const { data, isLoading } = useQuery(
    ["fruits", location?.state?.pageIndex],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/posts?page=${
          location?.state?.pageIndex + 1
        }`
      )
      
    },
    { keepPreviousData : true }
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
export default Home;
