import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Skeleton from "../Customhook/MaterialUiskeleton";
import PaginatedItems from "../component/body/Pagination";
const Author = () => {
  const { state } = useLocation();

  const { data, isLoading } = useQuery(
    ["fruits", state],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/posts?page=${
          state?.pageIndex + 1
        }&author=${state?.index}`
      );
    },
    { keepPreviousData: true }
  );
  if (isLoading){
    return <Skeleton></Skeleton>
  }

  return (
    <div className="box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center text-[#141617] ">
      <div className="max-w-[1200px] h-full w-full  flex flex-col items-start justify-start text-left leading-[1.2] tracking-[0.015em] ">
        <div className="box-border w-full flex flex-row items-start mb-[20px]  ">
          <div className="max-w-[90px] max-h-[90px] box-border rounded-full">
            <img
              className="w-full h-full rounded-full   "
              src={state?.authorDetail?.avatar_urls["96"]}
            ></img>
          </div>
          <div className="box-border ml-[20px] ">
            <div className="text-[30px] font-[600] mb-[30px] ">{`About ${state?.authorDetail?.name}`}</div>
            <div className="mb-[10px] text-[18px] ">
              This author has not yet filled in any details.
            </div>
            <div className="text-[18px]">{`So far ${state?.authorDetail?.name} has created ${data?.headers?.["x-wp-total"]} blog entries.`}</div>
          </div>
        </div>
        <div className="box-border border-y-[1px] border-solid border-[#e0dede] w-full py-[5px]  "></div>
        <PaginatedItems
          allpost={data?.data}
          totalData={data?.headers?.["x-wp-total"]}
        ></PaginatedItems>
      </div>
    </div>
  );
};

export default Author;
