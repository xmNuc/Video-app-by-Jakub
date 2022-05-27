import React from 'react';

interface Props {
  postPerPage: number;
  totalPost: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = (props: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPost / props.postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination d-flex justify-content-center my-5">
        {pageNumbers.map((pageNumber, index) => (
          <li key={pageNumber + index} className="page-item p-1">
            <a onClick={() => props.paginate(pageNumber)} href="!#" className="page-link">
              {pageNumber}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};
