import React, { useEffect, useLayoutEffect } from "react";
import HeaderNav from "./HeaderNav";
import { Link, useLocation } from "react-router-dom";
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
  console.log("heaader");
  const location = useLocation();
  navComponent.forEach((data) => {
    if (location?.state?.categoriesID?.includes(data.id)) {
      data.visibility = true;
    } else {
      data.visibility = false;
    }
  });

  return <HeaderNav navComponent={navComponent}></HeaderNav>;
};

export default Header;
