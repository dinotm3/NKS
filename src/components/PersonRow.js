import React, { Profiler } from "react";
import { logTimes } from "../utils/logProfiler";

const PersonRow = (props) => {
  return (
    //<Profiler id="row-info" onRender={logTimes}>
      <tr data-testid="tid-2" className={props.is_active ? undefined : "strikethrough"}>
        <td>{props.Name}</td>
        <td>{props.Surname}</td>
        <td>{props.Email}</td>
        <td>{props.Telephone}</td>
        <td>{props.CityId}</td>
      </tr>
    //</Profiler>
  );
};

export default PersonRow;
