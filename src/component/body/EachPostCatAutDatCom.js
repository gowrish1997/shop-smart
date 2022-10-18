import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import EachPostCategory from "./EachPostCategory";
const EachPostCatAutDatCom = ({ eachPostData }) => {
  const history = useHistory();

  const { data, isLoading } = useQuery(
    ["EachPostCatAutDatCom", eachPostData],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${eachPostData?.author}`
      );
    },
    { keepPreviousData: true }
  );

  function authNavigateHandler(id) {
    history.push({
      pathname: `/auth/${data?.data?.name.slice(
        0,
        data?.data?.name.lastIndexOf(" ")
      )}/page/1`,
      state: { index: id, pageIndex: 0, authorDetail: data?.data },
    });
  }


  return (
    <div className="box-border  text-[13px] leading-[1.5] tracking-[-0.015em] flex flex-row flex-wrap  ">
      <div
        onClick={() => authNavigateHandler(eachPostData?.author)}
        className=" transition-colors duration-200 ease-in  leading-[1.2] tracking-[-0.015em]  text-left hover:text-[#65bd7d] cursor-pointer"
      >{`By ${data?.data?.name} \u00A0|`}</div>
      <div>
        {`  \u00A0 ${new Date(eachPostData?.date).toLocaleString("default", {
          month: "long",
        })} ${new Date(eachPostData?.date).getDate()} ${new Date(
          eachPostData?.date
        ).getFullYear()}  \u00A0 | `}
      </div>

      <EachPostCategory eachPostData={eachPostData}></EachPostCategory>
    </div>
  );
};

export default EachPostCatAutDatCom;
