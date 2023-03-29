import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, onPageClick , onNext, onPrev}) => {
   const [currentPage, setCP]=useState(1)
   const [activeBtn,setActive]=useState(false)
  // this line is generating array of number of page, we have passed length of elements to add and one callback that is adding index as array elements 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
    {// to show total number of page button
    } 
    <button disabled={currentPage==1?true:false} onClick={() => {setCP(currentPage=>currentPage-1); onPrev(currentPage)}}>Prev</button>
      {pages.map((page,idx) => (
        <button className={currentPage == idx+1?"active":"inactive"}  key={page} onClick={() => {onPageClick(page);setCP(page); setActive(true)}}>
          {page}
        </button>

      ))}
      <button disabled={currentPage==10?true:false} onClick={() => {setCP(currentPage=>currentPage+1); onNext(currentPage)}}>Next</button>
    </div>
  );
};

export default Pagination;