import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollDirection from "../../Customhook/Scrollheight";
import {
  Logocontainer,
  Maincontainer,
  Navcontainer,
  Insidecontainer,
  Searchcontainer,
  Movingcontainer,
  Clearcontainer,
  Inpucontainer,
  Logoimage,
  Category,
} from "./Headerstyle";
const HeaderNav = ({ navComponent }) => {

  const { height } = useScrollDirection();
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
    <div
      className={`box-border
    w-full
    flex
    flex-row
    justify-center
    h-[99px]
    px-[30px]
    text-[16px]
    bg-[#ffffff]
    z-50
    sticky top-[0px] left-[0px]
  ${height>0?'shadow shadow-[rgb(0 0 0 0.12)]':''}
    `}
    >
      <Insidecontainer>
        <Logocontainer>
          <Logoimage src="https://shopsmart.in/wp-content/uploads/2022/02/Shopsmart-logo.png"></Logoimage>
        </Logocontainer>
        <Movingcontainer>
          <Navcontainer>
            {navComponent?.map((category, index) => {
              return (
                <Link
                  key={index}
                  to={{
                    pathname: `/category/${category.slug}/`,
                    state: { categoryId: category.id },
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
              <i class="far fa-search"></i>
            </li>
          </Navcontainer>

          <Searchcontainer>
            <Inpucontainer></Inpucontainer>

            <Clearcontainer>
              <i class="fad fa-window-close"></i>
            </Clearcontainer>
          </Searchcontainer>
        </Movingcontainer>
      </Insidecontainer>
    </div>
  );
};

export default HeaderNav;
