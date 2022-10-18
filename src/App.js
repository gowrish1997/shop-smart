import React, { useEffect, useMemo, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import "./App.css";
import Header from "./component/Header/Header";
import PaginatedItems from "./component/body/Pagination";
import PostDetail from "./component/Individualpost/PostDetail";
import Footer from "./component/Footer/Footer";
import ScrollUp from "./Customhook/ScrollUp";
import Slider from "./component/Gallery/Slider";
import Home from "./Page/Home";
import Category from "./Page/Category";
import Author from "./Page/Author";
function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
const [allPost, setAllpost] = useState(null);
  const [allPostIds, setpostIds] = useState(null);
  useEffect(() => {
    try {
      const post = axios.get(
        "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=10"
      );
      const id = axios.get(
        "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100&_fields=id,slug,categories"
      );
      Promise.all([post, id])
        .then((result) => {
          setAllpost(result);
          setpostIds(result[1].data);
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header></Header>
        <ScrollUp></ScrollUp>
        <Switch>
          <Route path="/" exact>
            {allPost && (
              <PaginatedItems
                allpost={allPost[0]?.data}
                totalData={allPost[0]?.headers?.["x-wp-total"]}
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
            {allPost && <PostDetail allPostIds={allPostIds}></PostDetail>}
          </Route>

          <Route path="/auth/:authname/page/:pagenumder">
            <Author></Author>
          </Route>

          <Footer></Footer>
          {/* <Slider></Slider>
           */}
        </Switch>
      </div>
    </QueryClientProvider>
  );
}
export default App;
