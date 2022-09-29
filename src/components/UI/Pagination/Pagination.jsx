import React from 'react';
import { getPagesArray } from '../../../utils/pajes';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map(currentPage =>
        <span
          onClick={() => changePage(currentPage)}
          className={page === currentPage ? 'page page__current' : 'page '}
          key={currentPage}
        >
            {currentPage}
          </span>
      )}
    </div>
  );
};

export default Pagination;
