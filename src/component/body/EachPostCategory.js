import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
const EachPostCategory = ({ eachPostData }) => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  useEffect(() => {
    setCategoriesArray([]);
    for (let i = 0; i < eachPostData?.categories?.length; i++) {
      axios
        .get(
          `https://smartblog.portfolios.digital/wp-json/wp/v2/categories/${eachPostData?.categories[i]}`
        )
        .then((value) => {
          setCategoriesArray((prev) => [
            ...prev,
            { value: value?.data?.name, id: eachPostData?.categories[i] },
          ]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  return (
    <span className="text-[13px] text-[#141617] leading-[1.5] tracking-[-0.015em] ">
      {categoriesArray?.map((category, index) => {
        if (index == categoriesArray?.length - 1) {
          return (
            <Link
              to={{
                pathname: `/category/${category.value.replace(" ", "-")}/`,
                state: { categoryId: category.id },
              }}
            >
              {" "}
              <span
                className="text-[13px] text-[#141617] hover:text-[#] transition-colors duration-200 ease-in  hover:text-[#65bd7d] cursor-pointer "
                key={index}
              >{` \u00A0 ${category?.value}`}</span>
            </Link>
          );
        } else {
          return (
            <Link
              to={{
                pathname: `/category/${category.value.replace(" ", "-")}/`,
                state: { categoryId: category.id },
              }}
            >
              {" "}
              <span
                className="text-[13px] text-[#141617] hover:text-[#] transition-colors duration-200 ease-in  hover:text-[#65bd7d] cursor-pointer "
                key={index}
              >{` \u00A0 ${category?.value},`}</span>
            </Link>
          );
        }
      })}
    </span>
  );
};

export default EachPostCategory;
