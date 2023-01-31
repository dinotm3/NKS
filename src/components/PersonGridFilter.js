const PersonGridFilter = (props) => {
  return (
    <>
      <tr>
        <td><input type="text" onChange={props.onFirstNameChange} /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td colSpan={5}>
          <label>
            <input type="checkbox" onChange={props.onOnlyActiveChange} /> Only active
          </label>
        </td>
      </tr>
    </>
  )
}

// Functional version - pure function - props destructuring
// const PersonGridFilter = ({ onFirstNameChange, onOnlyActiveChange }) => (
//   <>
//     <tr>
//       <td><input type="text" onChange={onFirstNameChange} /></td>
//       <td><input type="text" /></td>
//       <td><input type="text" /></td>
//       <td><input type="text" /></td>
//       <td><input type="text" /></td>
//     </tr>
//     <tr>
//       <td colSpan={5}>
//         <label>
//           <input type="checkbox" onChange={onOnlyActiveChange} /> Only active
//         </label>
//       </td>
//     </tr>
//   </>
// );

export default PersonGridFilter