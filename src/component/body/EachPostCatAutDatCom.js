import axios from "axios";
import React, { useEffect, useState } from "react";
import EachPostCategory from "./EachPostCategory";
const EachPostCatAutDatCom = ({ eachPostData }) => {
  const [postUser, setPostUser] = useState(null);

  useEffect(() => {
    const user = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${eachPostData?.author}`
    );

    Promise.all([user]).then((results) => {
      setPostUser(results[0]);
    });
    
  }, [eachPostData]);
  return (
    <div className="box-border mb-[15px] text-[13px] leading-[1.5] tracking-[-0.015em] flex flex-row flex-wrap  ">
      <div>{`By ${postUser?.data?.name} \u00A0|`}</div>
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
