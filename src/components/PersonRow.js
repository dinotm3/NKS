const PersonRow = (props) => {
  return (
    <tr className={props.is_active ? undefined : "strikethrough"}>
      <td>{props.Name}</td>
      <td>{props.Surname}</td>
      <td>{props.Email}</td>
      <td>{props.Telephone}</td>
      <td>{props.CityId}</td>
    </tr>
  )
}

export default PersonRow