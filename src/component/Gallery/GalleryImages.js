import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const GalleryImages = ({ eachPostData }) => {
  const { data, isLoading } = useQuery(
    ["images", eachPostData],
    () => {
      return axios.get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/media/${eachPostData?.featured_media}`
      );
    },
    { keepPreviousData: true }
  );

  return (
    <div className="imagecontainer">
      <div className="image">
        <div className="text-[20px] p-[10px]  w-full ">{data?.data?.slug}</div>
        <img src={data?.data?.source_url} alt=""></img>
      </div>
    </div>
  );
};

export default GalleryImages;
