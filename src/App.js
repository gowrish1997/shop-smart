import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./component/Header/Header.";
import PaginatedItems from "./component/body/Pagination";
import PostDetail from "./component/Individualpost/PostDetail";
import AuthorDetail from "./component/Author/AuthorDetail";
import Footer from "./component/Footer/Footer";
import ScrollUp from "./component/ScrollUp";
import Slider from "./component/Gallery/Slider";
function App() {
  console.log('app')
  const location = useLocation();
const categoryId = location?.state?.categoryId;
  const [allPost, setAllpost] = useState(null);
  const [allPostIds, setpostIds] = useState(null);
  useEffect(() => {
    try {
      const post = axios.get(
        "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100"
      );
      const id = axios.get(
        "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100&_fields=id,slug,categories"
      );
      Promise.all([post, id])
        .then((result) => {
          setAllpost(result[0].data);
          setpostIds(result[1].data);
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  
  const filteredCategory = allPost?.filter((post) => {
    if (categoryId) {
      return post?.categories.includes(categoryId);
    } else {
      return post;
    }
  });

  return (
    <div className="App">
      <Header></Header>
<ScrollUp></ScrollUp>
      <Switch>
        <Route path="/" exact>
          {allPost && (
            <PaginatedItems allpost={filteredCategory}></PaginatedItems>
          )}
        </Route>
        <Route path="/page/:pagenumber">
          {allPost && (
            <PaginatedItems
              allpost={filteredCategory}
              itemsPerPage={10}
            ></PaginatedItems>
          )}
        </Route>
        <Route path="/category/:categorytype/" exact>
          <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems>
        </Route>
        <Route path="/category/:categorytype/page/:pagenumber">
          <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems>
        </Route>
        <Route path="/:postDetail" exact>
          {allPost && (
            <PostDetail allpost={allPost} allPostIds={allPostIds}></PostDetail>
          )}
        </Route>
        <Route path="/auth/:authname/" exact>
          <AuthorDetail></AuthorDetail>
        </Route>
        <Route path="/auth/:authname/page/:pagenumder">
          <AuthorDetail></AuthorDetail>
        </Route>
      </Switch>

      <Footer></Footer>
      {/* <Slider></Slider> */}
    </div> 
  );
}
export default App;
