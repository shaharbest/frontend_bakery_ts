import React from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (num: number) => void;
}

export function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps) {
  const pageNumbers = getAllPageNumbers(totalItems, itemsPerPage);

  return (
    <nav>
      {pageNumbers.map((number) => (
        <span key={number}>
          <a onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </span>
      ))}
    </nav>
  );
}

function getAllPageNumbers(totalItems: number, itemsPerPage: number): number[] {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++)
    pageNumbers.push(i);

  return pageNumbers;
}