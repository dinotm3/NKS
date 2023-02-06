import React from "react";

const Pagination = ({ postsPerPage, totalPosts, changePage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav class="flex fixed w-screen justify-center items-center text-center p-5 m-4">
      <ul class="flex list-style-none">
        {pageNumbers.map((number) => (
          <li key={number} class="page-item active">
            <a
              onClick={() => changePage(number)}
              href="#"
              class={
                currentPage === number
                  ? "px-3 py-2 ml-0 leading-tight text-gray-500 border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
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
