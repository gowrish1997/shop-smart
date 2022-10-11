import axios from "axios";
import React, { useEffect, useState } from "react";
const Eachpost = ({ eachPostData }) => {
  const [postImage, setPostImage] = useState({});
  const [postUser, setPostUser] = useState();
  const [categoriesArray, setCategoriesArray] = useState([]);
  useEffect(() => {
    const media = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/media/${eachPostData?.featured_media}`
    );
    const user = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${eachPostData?.author}`
    );

    Promise.all([media, user]).then((results) => {
      setPostImage(results[0]);
      setPostUser(results[1]);
      // console.log(results[1]);
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
    <div className="box-border flex flex-col mb-[50px] ">
      <div className="box-border flex flex-row flex-wrap md:flex-nowrap justify-start align-baseline">
        <div className="box-border w-[82px] min-w-[82px] mr-[17px]">
          <div className="bg-[#65bd7d] p-[10px]">
            <div className="text-[29px] font-[700] leading-[29px] text-[#fff] ">
              {new Date(eachPostData?.date).getDate()}
            </div>
            <div className=" text-[#fff] ">{`0${
              new Date(eachPostData?.date).getMonth() + 1
            }, ${new Date(eachPostData?.date).getFullYear()}`}</div>
          </div>
          <div className="box-border p-[20px] bg-[#eef0f2] mt-[3px]">
            <i class="fas fa-pen-nib fa-1x" style={{ color: "#469408" }}></i>
          </div>
        </div>
        <div className="group box-border relative w-[320px] h-[202px] min-w-[320px] min-h-[202px] mr-[17px] overflow-hidden  ">
          <div className="box-border w-full h-full">
            <img
              className="box-border w-full h-full object-cover"
              src={postImage?.data?.source_url}
              alt=""
            ></img>
          </div>
          <div className="box-border w-[full] h-full translate-x-[-101%] absolute top-0 left-0 bg-gradient-to-t from-[#65bd7d] to-text-light-green    group-hover:translate-x-[0%] transition-translate duration-300 ease-in flex flex-col justify-center items-center">
            <div className="box-border flex flex-row justify-center ">
              <div className="box-border h-[40px] w-[40px] bg-black rounded-full flex flex-row justify-center items-center cursor-pointer ">
                <i class="far fa-link fa-1x" style={{ color: "white" }}></i>
              </div>
              <div className="box-border h-[40px] w-[40px] bg-black rounded-full flex flex-row justify-center items-center ml-[10px] curs">
                <i class="far fa-search fa-1x" style={{ color: "white" }}></i>
              </div>
            </div>
            <div
              className="text-[24px] font-[600] leading-[1.2] tracking-[-0.015em] text-[#141617] "
              dangerouslySetInnerHTML={{
                __html: eachPostData?.title?.rendered,
              }}
            ></div>
            <div>jkdgnsdjklgnsjdbjkl</div>
          </div>
        </div>
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
            ).getFullYear()} | ${categoriesArray?.map(
              (category) => category
            )} |  `}
          </div>
          <div
            className="box-border  text-left max-w-[700px] leading-[1.72] text-[16px] tracking-[0.015em] font-[400]"
            dangerouslySetInnerHTML={{
              __html: eachPostData?.excerpt?.rendered,
            }}
          ></div>
        </div>
      </div>
      <div className="box-border  border-b-[1px] border-[#e7e6e6] border-solid mt-[15px] pb-[5px]  ">
        <div className="flex flex-row justify-end items-center  group cursor-pointer ">
          <div className="text-[#141617] leading-[1.72] text-[16px] tracking-[0.015em] font-[400] transition-colors duration-200 ease-in group-hover:text-[#65bd7d] ">
            Read More
          </div>
          <div>
            <i className="fal fa-greater-than fa-xs ml-[5px] transition-colors duration-200 ease-in group-hover:text-[#65bd7d] "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eachpost;
