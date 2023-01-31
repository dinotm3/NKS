import React, { Profiler } from "react";
import { logTimes } from "../utils/logProfiler";

// Single Responsibility Principle: The component has a single responsibility, which is to render a row of person data.

// Open/Closed Principle: The component could be extended to display additional data without modifying its source code.

// Dependency Inversion Principle: The component does not depend on concrete implementations,
// but instead depends on abstractions in the form of props passed to it, which makes it easier to reuse and test.

const PersonRow = (props) => {
  return (
    <Profiler id="row-info" onRender={logTimes}>
      <tr data-testid="tid-2" className={props.is_active ? undefined : "strikethrough"}>
        <td>{props.Name}</td>
        <td>{props.Surname}</td>
        <td>{props.Email}</td>
        <td>{props.Telephone}</td>
        <td>{props.CityId}</td>
      </tr>
    </Profiler>
  );
};

export default PersonRow;
