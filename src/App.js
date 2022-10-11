import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header/Header.";
import { PaginatedItems } from "./component/body/Pagination";
function App() {
  const [allPost, setAllpost] = useState([]);
  useEffect(() => {
    async function getAllData() {
      try {
        const allpost = await axios.get(
          "https://smartblog.portfolios.digital/wp-json/wp/v2/posts?per_page=100"
        );
        setAllpost(allpost.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAllData();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <PaginatedItems allpost={allPost} itemsPerPage={10}></PaginatedItems>
    </div>
  );
}
export default App;
//65bc7b
