import axios from "axios";
import React, { useEffect, useState } from "react";
const EachPostTitle = ({ eachPostData }) => {
  const [postUser, setPostUser] = useState(null);
  const [categoriesArray, setCategoriesArray] = useState(null);
  useEffect(() => {
    const user = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${eachPostData?.author}`
    );

    Promise.all([user]).then((results) => {
      setPostUser(results[0]);

      setCategoriesArray([]);
      for (let i = 0; i < eachPostData?.categories?.length; i++) {
        axios
          .get(
            `https://smartblog.portfolios.digital/wp-json/wp/v2/categories/${eachPostData?.categories[i]}`
          )
          .then((value) => {
            setCategoriesArray((prev) => [...prev, value?.data?.name]);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  }, []);
  return (
    <div className="box-border flex flex-col justify-start items-start text-[#141617] ">
      <h1
        className="box-border transition-colors duration-200 ease-in text-[36px] font-[600] leading-[1.2] tracking-[-0.015em]  text-left hover:text-[#65bd7d] cursor-pointer"
        dangerouslySetInnerHTML={{ __html: eachPostData?.title?.rendered }}
      ></h1>
      <div className="mb-[15px] text-[13px] leading-[1.5] tracking-[-0.015em]  ">
        {`By ${postUser?.data?.name}  |  ${new Date(
          eachPostData?.date
        ).toLocaleString("default", { month: "long" })} ${new Date(
          eachPostData?.date
        ).getDate()} ${new Date(
          eachPostData?.date
        ).getFullYear()} | ${categoriesArray?.map((category) => category)} |  `}
      </div>
      <div
        className="box-border  text-left max-w-[700px] leading-[1.72] text-[16px] tracking-[0.015em] font-[400]"
        dangerouslySetInnerHTML={{
          __html: eachPostData?.excerpt?.rendered,
        }}
      ></div>
    </div>
  );
};

export default EachPostTitle;
