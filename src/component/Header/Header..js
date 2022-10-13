import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  { id: 2, name: "Tech", slug: "Tech", visibility: false },
  {
    id: 11,
    name: "Home Appliances",
    slug: "home-appliances",
    visibility: false,
  },
  { id: 4, name: "Tips", slug: "tips", visibility: false },
  { id: 8, name: "Buyers Guide", slug: "buyers-guide", visibility: false },
];

const Header = () => {
  const scrollheight = Scrollheight();

  return (
    <Maincontainer>
      <Insidecontainer>
        <Logocontainer>
          <Logoimage src="https://shopsmart.in/wp-content/uploads/2022/02/Shopsmart-logo.png"></Logoimage>
        </Logocontainer>
        <Movingcontainer>
          <Navcontainer>
            {navComponent.map((navCategory,index) => {
              return (
                <Link
                key={index}
                  to={{
                    pathname: `/category/${navCategory.slug}/`,
                    state: { categoryId: navCategory.id },
                  }}
                >
                  <Category
                    key={navCategory.id}
                    className={`${
                      navCategory.visibility
                        ? " border-[#65bd7d]"
                        : "border-transparent"
                    }`}
                  >
                    {navCategory.name}
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
    </Maincontainer>
  );
};

export default Header;
