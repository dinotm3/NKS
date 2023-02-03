import React from "react";

const PersonRow = (props) => {
  return (
      <tr>
        <td>{props.Name}</td>
        <td>{props.Surname}</td>
        <td>{props.Email}</td>
        <td>{props.Telephone}</td>
        <td>{props.CityId}</td>
      </tr>
  );
};

export default PersonRow;
