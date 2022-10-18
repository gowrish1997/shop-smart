import { checkTargetForNewValues } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Allpost from "./Allpost";
const PaginatedItems = ({ allpost, totalData, itemsPerPage = 10 }) => {
  const location = useLocation();

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (location?.state?.pageIndex) {
      const newOffset =
        (location?.state?.pageIndex * itemsPerPage) % allpost?.length;

      setCurrentPage(location?.state?.pageIndex);

      const endOffset = newOffset + itemsPerPage;

      setCurrentItems(allpost?.slice(newOffset, endOffset));
      setPageCount(Math.ceil(totalData / itemsPerPage));
    } else {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(allpost?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(totalData / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, allpost, location]);

  return (
    <>
      <Allpost
        allpost={currentItems}
        pageCount={pageCount}
        currentPage={location?.state?.pageIndex}
      />
    </>
  );
};
export default React.memo(PaginatedItems);
