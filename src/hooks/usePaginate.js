import { useState, useEffect } from "react";

export const usePaginate = (initialOffset, limit, initialPage) => {
  const [offset, setOffset] = useState(initialOffset);
  const [page, setPage] = useState(initialPage);

  const onNext = () => {
    setOffset((prev) => prev + limit);
    setPage(page + 1);
    //console.log(offset);
  };

  const onPrev = () => {
    setOffset((prev) => {
      if (prev <= initialOffset) {
        setPage(initialPage);
        return initialOffset;
      } else {
        setPage(page - 1);
        return prev - limit;
      }
    });
    console.log(offset);
  };

  return {
    offset,
    onNext,
    onPrev,
    page,
    setPage,
  };
};
