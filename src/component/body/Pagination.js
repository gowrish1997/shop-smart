import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
export const PaginatedItems = ({ allpost, itemsPerPage }) => {
  console.log(allpost);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage,setCurrentPage]=useState(0)
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(allpost?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allpost.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allpost.length;
setCurrentPage(event.selected)
console.log(event.selected);
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
