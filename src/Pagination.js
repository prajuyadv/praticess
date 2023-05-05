import React from "react";

const Pagination = ({ data, pagehandler }) => {
  //  let data=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pageNumber.push(i);
  }
  return (
    <div>
    <center  className="App">
      {pageNumber.map((page) => (
            <button
            className="button"
            onClick={()=>pagehandler(page)}
            >
              {page}
            </button>
          ))}
    </center>
    </div>
  );
};
export default Pagination;
