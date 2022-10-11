
import axios from "axios";
import React, { useEffect, useState } from "react";
const EachPostImage = ({ eachPostData }) => {
    const [postImage, setPostImage] = useState(null);
  useEffect(() => {
    const media = axios.get(
      `https://smartblog.portfolios.digital/wp-json/wp/v2/media/${eachPostData?.featured_media}`
    );

    Promise.all([media]).then((results) => {
      setPostImage(results[0]);
    });
  }, []);

  return (
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
  );
};

export default EachPostImage;
