const PersonGridFilter = (props) => {
  return (
    <>
      <tr className="bg-yellow-100">
        <td>
          <input type="text" onChange={props.onFirstNameChange} placeholder="Filter by name" />
        </td>
        <td>
          <input type="text" onChange={props.onLastNameChange} placeholder="Filter by last name" />
        </td>
        <td>
          <input type="text" onChange={props.onEmailChange} placeholder="Filter by email" />
        </td>
        <td>
          <input type="text" onChange={props.onTelephoneChange} placeholder="Filter by telephone" />
        </td>
      </tr>
    </>
  );
};

export default PersonGridFilter;
