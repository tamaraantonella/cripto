import React from "react";
interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

export default function Pagination({ currentPage, setPage }: PaginationProps) {
  const handleNextPage = () => {
    setPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setPage(currentPage - 1);
  };

  return (
    <div className="flex gap-3 justify-center text-2xl">
      {currentPage > 1 && <button onClick={handlePrevPage}>-</button>}
      <p>{currentPage}</p>
      <button onClick={handleNextPage}>+</button>
    </div>
  );
}
