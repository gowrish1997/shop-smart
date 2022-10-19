import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useLocation, useHistory, useSearch} from "react-router-dom";
import Eachpost from "./EachpostCopy";
const Allpost = ({ allpost, pageCount, currentPage }) => {
  const [originalPath, setorginalPath] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
  
    const original = location?.pathname?.slice(
      0,
      location?.pathname?.lastIndexOf("/")
    );
    setorginalPath(original);
    setCategoryId(location?.state?.categoryId);
  }, [location]);
  const onChangeHandler = (e) => {
    window.scroll(0, 0);

    if (originalPath) {
      if (!originalPath.includes("page")) {
        history.push({
          pathname: `${originalPath}/page/${e.selected + 1}`,
          state: {
            categoryId: categoryId,
            pageIndex: e.selected,
            index: location?.state?.index,
            authorDetail: location.state.authorDetail,
          },
        });
      } else {
        history.push({
          pathname: `${originalPath}/${e.selected + 1}`,
          state: {
            categoryId: categoryId,
            pageIndex: e.selected,
            index: location?.state?.index,
            authorDetail: location.state.authorDetail,
          },
        });
      }
    } else {
      history.push({
        pathname: `/page/${e.selected + 1}`,
        state: {
          pageIndex: e.selected,
          categoryId: categoryId,
          index: location?.state?.index,
        },
      });
    }
  };

  return (
    <div className=" box-border bg-[#ffffff] p-[30px] pt-[60px] flex flex-row justify-center">
       <div className="max-w-[1200px] min-h-[100vh] h-full  flex flex-col items-start justify-start ">
        {allpost?.map((data, index) => {
          return <Eachpost key={index} eachPostData={data} index={index}  allpost={allpost}  />;
        })}
        <div className="w-full flex flex-row justify-end ">
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
            // initialSelected={currentPage}
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
          >
    
          </ReactPaginate>
        </div>
       
      </div>
     
    </div>
  );
};

export default Allpost;
