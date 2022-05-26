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
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a onClick={() => props.paginate(pageNumber)} href="!#" className="page-link">
              {pageNumber}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};
