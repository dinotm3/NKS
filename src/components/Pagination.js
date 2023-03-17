import React from "react";

const Pagination = ({ postsPerPage, totalPosts, changePage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex w-screen justify-center items-center text-center p-2 m-4">
      <ul className="flex list-style-none">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item active">
            <a
              onClick={() => changePage(number)}
              href="#"
              className={ 
                currentPage === number ? 
              "px-3 py-2 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white":
              "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            }
            >
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
