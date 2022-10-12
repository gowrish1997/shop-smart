import axios from "axios";
import React, { useEffect, useState } from "react";

const PostAuthor = ({ post }) => {
  const [authorDetail, setauthorDetail] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://smartblog.portfolios.digital/wp-json/wp/v2/users/${post?.author}`
      )
      .then((value) => {
        setauthorDetail(value.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [post]);
  return (
    <div className="box-border mb-[60px] ">
      <div className=" box-border text-[20px] font-bold mb-[20px]">{`About the Author:${authorDetail?.name}`}</div>
      <div className="max-w-[90px] max-h-[90px] box-border rounded-full">
        <img
          className="w-full h-full rounded-full   "
          src={authorDetail?.avatar_urls["96"]}
        ></img>
      </div>
    </div>
  );
};

export default PostAuthor;
