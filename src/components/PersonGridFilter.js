const PersonGridFilter = (props) => {
  return (
    <>
      <tr>
        <td>
          <input type="text" onChange={props.onFirstNameChange} />
        </td>
        <td>
          <input type="text" onChange={props.onLastNameChange} />
        </td>
        <td>
          <input type="text" onChane={props.onEmailChange}/>
        </td>
        <td>
          <input type="text" onChange={props.onTelephoneChange}/>
        </td>
      </tr>
      <tr>
        <td colSpan={4}>
          <label>
            <input type="checkbox" onChange={props.onOnlyActiveChange} /> Only
            active
          </label>
        </td>
      </tr>
    </>
  );
};

export default PersonGridFilter;
