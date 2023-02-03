import React, { Profiler } from "react";
import PersonRow from "./PersonRow";
import PersonGridFilter from "./PersonGridFilter";
import "./PersonGrid.css";
import { useState, useEffect } from "react";
import { filterData } from "../utils/filter";
import { logTimes } from "../utils/logProfiler";

const PersonGrid = () => {
  const [data, setData] = useState([]);
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [lastNamePrefix, setLastNamePrefix] = useState("");
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

  // Pure fuction, immutability of e
  const onFirstNameChangeHandler = (e) =>
    setFirstNamePrefix(e.target.value.toLowerCase());

  const onLasttNameChangeHandler = (e) =>
    setLastNamePrefix(e.target.value.toLowerCase());

  // Pure fuction, immutability of e
  const onOnlyActiveChangeHandler = (e) => setOnlyActive(e.target.checked);

  return (
    <Profiler id="table-info" onRender={logTimes}>
      <table data-testid="tid-1" className="styled-table">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>E-mail</th>
            <th>Telephone</th>
            <th>City code</th>
          </tr>
          {
            <PersonGridFilter
              onFirstNameChange={onFirstNameChangeHandler}
              onOnlyActiveChange={onOnlyActiveChangeHandler}
              onLastNameChange={onLasttNameChangeHandler}
            />
          }
        </thead>
        <tbody>
          {filterData(data, firstNamePrefix, onlyActive).map((item) => {
            return <PersonRow key={item.Id} {...item}></PersonRow>;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </Profiler>
  );
};

export default PersonGrid;
