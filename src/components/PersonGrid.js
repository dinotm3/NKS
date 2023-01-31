import PersonRow from './PersonRow'
import PersonGridFilter from './PersonGridFilter'
import './PersonGrid.css'
import { useState, useEffect } from 'react'
import { filterData } from '../utils/filter'

const PersonGrid = () => {
  const [data, setData] = useState([]);
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);

  useEffect(() => {
    async function fetchData() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const response = await fetch("http://www.fulek.com/nks/api/aw/customers", requestOptions);
      const data = await response.json();
      console.log(data);  
      setData(data);
    }
    fetchData();
  }, []);

  const onFirstNameChangeHandler = (e) =>
    setFirstNamePrefix(e.target.value.toLowerCase());

  const onOnlyActiveChangeHandler = (e) =>
    setOnlyActive(e.target.checked);

  return (
    <table data-testid="tid-1" className="styled-table">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>E-mail</th>
          <th>Gender</th>
          <th>IP address</th>
        </tr>
        {<PersonGridFilter 
          onFirstNameChange={onFirstNameChangeHandler}
          onOnlyActiveChange={onOnlyActiveChangeHandler} />}
      </thead>
      <tbody >
        {filterData(data, firstNamePrefix, onlyActive).map((item) => {
          return (<PersonRow key={item.id} {...item}></PersonRow>)
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}


export default PersonGrid