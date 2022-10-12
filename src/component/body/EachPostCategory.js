import axios from "axios";
import React, { useEffect, useState } from "react";
const EachPostCategory = ({ eachPostData }) => {
  const [categoriesArray, setCategoriesArray] = useState(null);
  useEffect(() => {

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

  }, [eachPostData]);
  return (
    <span className="text-[13px] text-[#141617] leading-[1.5] tracking-[-0.015em] "  >
      {categoriesArray?.map((category,index) => {
        if(index==categoriesArray?.length-1){
           return  <span className="text-[13px] text-[#141617] " key={index}>{` \u00A0 ${category}`}</span>
        }
        else{
           return <span className="text-[13px] text-[#141617] " key={index}>{` \u00A0 ${category},`}</span>
        }
       
})}
    </span>
  );
};

export default EachPostCategory;
