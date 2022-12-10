import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
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
  const maxPage = 9;

  return (
    <div className="grid grid-cols-3 w-fit mx-auto gap-3 justify-center font-semibold items-center text-violet-900 my-8">
      <button
        className={`px-3 text-2xl ${currentPage > 1 ? "visible" : ' invisible '}`}
        onClick={handlePrevPage}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <p className={`text-2xl `}>
        {currentPage}
      </p>
      <button
        className={`px-3 text-2xl ${currentPage < maxPage ? "visible" : 'invisible'}`}
        onClick={handleNextPage}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
