import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header.";
import PaginatedItems from "./component/body/Pagination";
import PostDetail from "./component/Individualpost/PostDetail";
function App() {
  const location = useLocation();

  const categoryId = location?.state?.categoryId;

  const [allPost, setAllpost] = useState(null);

  useEffect(() => {
    async function getAllData() {
      try {
        const post = await axios.get(
          "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100"
        );
        setAllpost(post.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAllData();
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
      {/* {allPost && <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems> } */}
      {/* <Switch>
        <Route path="/" exact>
         
        </Route>
        <Route path="/category/:categorytype">
          <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems>
        </Route>
        <Route path="/:postDeatail">
          <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems>
        </Route>
      </Switch> */}
      {allPost && <PostDetail allpost={allPost}></PostDetail>}
    </div>
  );
}
export default App;
