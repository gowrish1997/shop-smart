import React, { } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navcontainer, Category } from "./Headerstyle";

const Navigation = ({ navComponent,searchShowHandler }) => {
  const location = useLocation();
  if (location?.state?.categoryId) {
    navComponent?.forEach((data) => {
      if (data.id == location.state.categoryId) {
        data.visibility = true;
      } else {
        data.visibility = false;
      }
    });
  }

  return (
    <Navcontainer>
      {navComponent?.map((category, index) => {
        return (
          <Link
            key={index}
            to={{
              pathname: `/category/${category.slug}/page/1`,
              state: { categoryId: category.id,pageIndex:0 },
            }}
          >
            <Category
              key={category.id}
              className={`${
                category.visibility
                  ? " border-[#65bd7d] text-[#65bd7d]"
                  : "border-transparent"
              }`}
            >
              {category.name}
            </Category>
          </Link>
        );
      })}
      <li className="pt-[31px]">
        <i class="far fa-search hover:text-[#65bd7d] " onClick={()=>searchShowHandler()}></i>
      </li>
    </Navcontainer>
  );
};

export default Navigation;
