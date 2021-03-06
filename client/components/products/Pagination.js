import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination pagination-small pagination-centered">
      <ul>
        <li>
          <a href="#">Prev</a>
        </li>
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
