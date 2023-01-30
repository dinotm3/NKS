import PersonRow from './PersonRow'
import PersonGridFilter from './PersonGridFilter'
import './PersonGrid.css'
import { useState, useEffect } from 'react'

const PersonGrid = () => {
  const [firstNamePrefix, setFirstNamePrefix] = useState("");
  const [onlyActive, setOnlyActive] = useState(false);

  const [data, setData] = useState([]);

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

  const filterData = () => 
    data.filter(
      (item) => {
        const fnLowerTest = item.Name.toLowerCase().startsWith(firstNamePrefix);
        const activeTest = !onlyActive || (onlyActive && item.is_active)
        return fnLowerTest && activeTest
      });

  return (
    <table className="styled-table">
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
      <tbody>
        {filterData().map((item) => {
          return (<PersonRow key={item.id} {...item}></PersonRow>)
        })}
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}

export default PersonGrid