import React, { Profiler } from "react";
import PersonRow from "./PersonRow";
import PersonGridFilter from "./PersonGridFilter";
import "./PersonGrid.css";
import { useState, useEffect } from "react";
import { filterData } from "../utils/filter";

const PersonGrid = () => {
  const [data, setData] = useState([]);
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [lastNamePrefix, setLastNamePrefix] = useState("");
  const [emailPrefix, setEmailPrefix] = useState("");
  const [telephonePrefix, setTelephonePrefix] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);

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

  const onOnlyActiveChangeHandler = (e) => setOnlyActive(e.target.checked);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>E-mail</th>
          <th>Telephone</th>
        </tr>
        {
          <PersonGridFilter
            onFirstNameChange={onFirstNameChangeHandler}
            onLastNameChange={onLastNameChangeHandler}
            onEmailChange={onEmailChangeHandler}
            onTelephoneChange={onTelephoneChangeHandler}
            onOnlyActiveChange={onOnlyActiveChangeHandler}
          />
        }
      </thead>
      <tbody>
        {filterData(data, firstNamePrefix, lastNamePrefix, emailPrefix, telephonePrefix, onlyActive).map(
          (item) => {
            return <PersonRow key={item.Id} {...item}></PersonRow>;
          }
        )}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default PersonGrid;
