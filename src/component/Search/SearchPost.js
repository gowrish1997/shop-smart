import React from 'react'
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PaginatedItems from "../body/Pagination";
import Skeleton from "../../Customhook/MaterialUiskeleton";
const SearchPost = () => {
  const location=useLocation();
  console.log('this is searchpost')
    const { data, isLoading } = useQuery(
        ["searchopost",location],
        () => {
          console.log('searchpost')
          return axios.get(
            `https://smartblog.portfolios.digital/wp-json/wp/v2/posts?page=${
              location?.state?.pageIndex + 1
            }&search=${location.state.searchvalue}`
          )
          
        },
        { keepPreviousData : true }
      );
      if (isLoading){
        return <Skeleton></Skeleton>
      }
   
  return (
    <>
    {data?.data?.length?  <PaginatedItems
      allpost={data?.data}
      totalData={data?.headers?.["x-wp-total"]}
      itemsPerPage={10}
    ></PaginatedItems>:<div>
       <div className="w-full text-[64px] font-[600] mb-[28px]  ">00PS!</div>
        <p className="w-full text-[32px] font-[400] ">No such related posts Try again</p>
      </div>}
  
  </>
  )
}

export default SearchPost