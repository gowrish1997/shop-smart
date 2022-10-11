import axios from "axios";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useLocation } from "react-router-dom";

import Eachpost from "./EachpostCopy";

const Homepage = ({ allpost, handlePageClick, pageCount, currentPage }) => {
  const location = useLocation();
  // console.log(location);
  const [page, setPage] = useState(0);
  const onChangeHandler = (e) => {
    window.scroll(0, 0);
    handlePageClick(e);
    setPage(e.selected);
  };

  return (
    <div className=" box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center">
      <div className="max-w-[1200px] h-full  flex flex-col items-start justify-start ">
        {allpost?.map((data, index) => {
          return <Eachpost eachPostData={data} key={index} />;
        })}
        <div className="w-full flex flex-row justify-end ">
          <Link
            to={{
              pathname: `${location.pathname}/page/${page}/`,
              state: { page: page },
            }}
          >
            <ReactPaginate
              nextLabel="Next >"
              onPageChange={onChangeHandler}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="< Previous"
              pageClassName="page-item"
              pageLinkClassName="prev-page-link"
              previousClassName={`${
                currentPage + 1 == 1 ? "prev-page-item1" : "prev-page-item"
              }`}
              previousLinkClassName="page-link"
              nextClassName={`${
                currentPage + 1 == pageCount
                  ? "next-page-item1"
                  : "next-page-item"
              }`}
              nextLinkClassName="next-page-link"
              breakLabel=".."
              breakClassName="page-item1"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
