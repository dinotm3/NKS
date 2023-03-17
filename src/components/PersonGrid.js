import React from "react";
import PersonRow from "./PersonRow";
import PersonGridFilter from "./PersonGridFilter";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import { filterData } from "../utils/filter";
import axios from "axios";

const PersonGrid = () => {
  const [data, setData] = useState([]);
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [lastNamePrefix, setLastNamePrefix] = useState("");
  const [emailPrefix, setEmailPrefix] = useState("");
  const [telephonePrefix, setTelephonePrefix] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log(localStorage.getItem("token"));
      axios
        .get("http://www.fulek.com/nks/api/aw/customers")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        }).catch(err => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  const onFirstNameChangeHandler = (e) =>
    setFirstNamePrefix(e.target.value.toLowerCase());

  const onLastNameChangeHandler = (e) =>
    setLastNamePrefix(e.target.value.toLowerCase());

  const onEmailChangeHandler = (e) =>
    setEmailPrefix(e.target.value.toLowerCase());

  const onTelephoneChangeHandler = (e) =>
    setTelephonePrefix(e.target.value.toLowerCase());

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const changePostsPerPage = (event) => setPostPerPage(event.target.value);
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <table className="table auto">
        <thead className="border-b">
          <tr className="text-sm font-large text-teal-900 px-6 py-4 border-r">
            <th className="bg-gray-300">First name</th>
            <th className="bg-gray-300">Last name</th>
            <th className="bg-gray-300">E-mail</th>
            <th className="bg-gray-300">Telephone</th>
          </tr>
          {
            <PersonGridFilter
              onFirstNameChange={onFirstNameChangeHandler}
              onLastNameChange={onLastNameChangeHandler}
              onEmailChange={onEmailChangeHandler}
              onTelephoneChange={onTelephoneChangeHandler}
            />
          }
        </thead>
        <tbody className="border-b">
          {filterData(
            currentPosts,
            firstNamePrefix,
            lastNamePrefix,
            emailPrefix,
            telephonePrefix
          ).map((item) => {
            return <PersonRow key={item.Id} {...item}></PersonRow>;
          })}
        </tbody>

        <tfoot></tfoot>
      </table>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        changePage={changePage}
        currentPage={currentPage}
      />

      <label
        htmlFor="pages"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select posts per page
      </label>
      <select
        id="pages"
        onChange={changePostsPerPage}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={postsPerPage}>{postsPerPage}</option>
        <option>5</option>;<option>10</option>;<option>20</option>;
        <option>50</option>
        <option>{data.length}</option>;
      </select>
    </>
  );
};

export default PersonGrid;
