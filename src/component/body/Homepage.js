import axios from "axios";
import ReactPaginate from "react-paginate";
import Eachpost from "./Eachpost";

const Homepage = ({ allpost ,handlePageClick,pageCount,currentPage}) => {

  return (
    <div className=" box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center">
      <div className="max-w-[1200px] h-full  flex flex-col items-start justify-start ">
        {allpost?.map((data) => {
          return <Eachpost eachPostData={data}></Eachpost>
        })}
        <div className="w-full flex flex-row justify-end ">
       <ReactPaginate
        nextLabel="Next >"
        onPageChange={(e)=>handlePageClick(e)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Previous"
        pageClassName="page-item"
        pageLinkClassName="prev-page-link"
        previousClassName={`${currentPage+1==1?"prev-page-item1":"prev-page-item"}`}
        previousLinkClassName="page-link"
        nextClassName={`${currentPage+1==pageCount? "next-page-item1": "next-page-item"}`}     
        nextLinkClassName="next-page-link"
        breakLabel=".."
        breakClassName="page-item1"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      </div>
      </div>
    </div>
  );
};

export default Homepage;
