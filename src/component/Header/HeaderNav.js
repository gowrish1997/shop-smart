import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useScrollDirection from "../../Customhook/Scrollheight";
import Navigation from "./Navigation";
import Search from "./SearchContainer";
import Dropdown from "./Dropdown";
import { Logocontainer, Insidecontainer, Logoimage } from "./Headerstyle";
const HeaderNav = ({ navComponent }) => {
  const { height } = useScrollDirection();
  const [show, setShow] = useState(true);
  const location = useLocation();
  function searchShowHandler() {
    setShow((prev) => !prev);
  }

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
      className={`box-border w-full flex flex-row justify-center h-full md:h-[99px] px-[30px] text-[16px] bg-[#ffffff]  md:first-letter:sticky top-[0px] left-[0px] ${
        height > 0 ? "shadow shadow-[rgb(0 0 0 0.12)]" : ""
      }
    `}
    >
      <Insidecontainer>
        <Logocontainer>
          <Logoimage src="https://shopsmart.in/wp-content/uploads/2022/02/Shopsmart-logo.png"></Logoimage>
        </Logocontainer>

        <div
          className={`hidden md:flex box-border flex-col justify-start items-start text-[#161417] ${
            show ? "translate-y-[-100px]" : "translate-y-[0px]"
          } transition-translate duration-700 ease-in
`}
        >
          <Search searchShowHandler={searchShowHandler}></Search>
          <Navigation
            navComponent={navComponent}
            searchShowHandler={searchShowHandler}
          ></Navigation>
        </div>

        <Dropdown navComponent={navComponent}></Dropdown>
      </Insidecontainer>
    </div>
  );
};

export default HeaderNav;
