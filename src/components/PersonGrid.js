import React from "react";
import PersonRow from "./PersonRow";
import PersonGridFilter from "./PersonGridFilter";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import { filterData } from "../utils/filter";

const PersonGrid = () => {
  const [data, setData] = useState([]);
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [lastNamePrefix, setLastNamePrefix] = useState("");
  const [emailPrefix, setEmailPrefix] = useState("");
  const [telephonePrefix, setTelephonePrefix] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    async function fetchData() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const response = await fetch(
        "http://www.fulek.com/nks/api/aw/customers",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setData(data);
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (pageNumber) => setCurrentPage(pageNumber);
  return (
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        changePage={changePage}
        currentPage={currentPage}
      />

      <tfoot></tfoot>
    </table>
  );
};

export default PersonGrid;
