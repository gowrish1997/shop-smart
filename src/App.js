import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header.";
import PaginatedItems from "./component/body/Pagination";
import PostDetail from "./component/Individualpost/PostDetail";
import AuthorDetail from "./component/Author/AuthorDetail";
function App() {
  const location = useLocation();

  const categoryId = location?.state?.categoryId;

  const [allPost, setAllpost] = useState(null);
  const [allPostIds, setpostIds] = useState(null);
  useEffect(() => {
    
      try {
        const post = axios.get(
          "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100"
        );
        const id=axios.get(
          "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100&_fields=id,slug"
        );
        Promise.all([post,id]).then((result)=>{
          setAllpost(result[0].data)
          setpostIds(result[1].data)
         

        }).catch((error)=>console.log(error.message))
  
        // setAllpost(post.data);
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
     
     <Switch>
        <Route path="/" exact>
        {allPost && <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems> } 
        </Route>
        <Route path="/page/:pagenumber" >
        {allPost && <PaginatedItems
            allpost={filteredCategory}
            itemsPerPage={10}
          ></PaginatedItems> } 
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
        {allPost && <PostDetail allpost={allPost} allPostIds={allPostIds} ></PostDetail>}
        </Route>
        <Route path="/auth/:authname/" exact>
        <AuthorDetail></AuthorDetail>
        </Route>
        <Route path="/auth/:authname/page/:pagenumder">
        <AuthorDetail></AuthorDetail>
        </Route>
      </Switch>
    
     
    
    </div>
  );
}
export default App;
