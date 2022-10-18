import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { Route, Switch, useLocation } from "react-router-dom";

import axios from "axios";
import "./App.css";
import Header from "./component/Header/Header";
import PaginatedItems from "./component/body/Pagination";
import IndividualPost from "./component/Individualpost/IndividualPost";
import Footer from "./component/Footer/Footer";
import ScrollUp from "./Customhook/ScrollUp";
import Slider from "./component/Gallery/Slider";
import Home from "./Page/Home";
import Category from "./Page/Category";
import Author from "./Page/Author";
function App() {
  console.log("this is app")
  const { data, isLoading } = useQuery(
    "APP",
    () => {
      return axios.get(
        "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=10"
      );
    },
    { keepPreviousData: true }
  );
  console.log(data);
  return (
    <div className="App">
      <Header></Header>
      <ScrollUp></ScrollUp>
      <Switch>
        <Route path="/" exact>
          {data && (
            <PaginatedItems
              allpost={data?.data}
              totalData={data?.headers?.["x-wp-total"]}
            ></PaginatedItems>
          )}
        </Route>
        <Route path="/page/:pagenumber" exact>
          <Home></Home>
        </Route>

        <Route path="/category/:categorytype/page/:pagenumber">
          <Category></Category>
        </Route>
        <Route path="/:postDetail" exact>
          <IndividualPost></IndividualPost>
        </Route>

        <Route path="/auth/:authname/page/:pagenumder">
          <Author></Author>
        </Route>

        <Footer></Footer>
        {/* <Slider></Slider> */}
      </Switch>
    </div>
  );
}
export default App;
