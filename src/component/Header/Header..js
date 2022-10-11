import React, { useEffect, useState } from "react";
import { Scrollheight } from "../../Customhook/Scrollheight";
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
const navComponent = [
  { id: 2, name: "Tech", visibility: false },
  { id: 11, name: "Home Appliances", visibility: false },
  { id: 4, name: "Tips", visibility: false },
  { id: 8, name: "Buyers Guide", visibility: false },
];

const Header = () => {
  const scrollheight = Scrollheight();
  console.log(scrollheight);
  return (
    <Maincontainer>
      <Insidecontainer>
        <Logocontainer>
          <Logoimage src="https://shopsmart.in/wp-content/uploads/2022/02/Shopsmart-logo.png"></Logoimage>
        </Logocontainer>
        <Movingcontainer>
          <Navcontainer>
            {navComponent.map((navCategory) => {
              return (
                <Category key={navCategory.id}
                  className={`${
                    navCategory.visibility
                      ? " border-[#65bd7d]"
                      : "border-transparent"
                  }`}
                >
                  {navCategory.name}
                </Category>
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
    </Maincontainer>
  );
};

export default Header;
