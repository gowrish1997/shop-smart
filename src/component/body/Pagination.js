import { checkTargetForNewValues } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Homepage from "./Homepage";
const PaginatedItems = ({ allpost, itemsPerPage = 10 }) => {
  const location = useLocation()
  console.log(location?.state?.pageIndex)
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
   setCurrentItems(allpost?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allpost?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allpost,location]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allpost.length;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Homepage
        allpost={currentItems}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </>
  );
};
export default React.memo(PaginatedItems);
