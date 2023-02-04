import React, { useState, useEffect } from "react";
import headers from "../../utils/constants";


const Register = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
              "username": "finodino@user.com",
              "password": "12345"
            });
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow',
            };
            
            fetch("http://www.fulek.com/nks/api/aw/registeruser", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        }
        fetchData();
      }, []);

      return (
        <h1>Register</h1>
      )
}

export default Register;
