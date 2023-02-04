import React, { useState, useEffect } from "react";
import headers from "../../utils/constants";

const Login = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: "finodino@user.com",
        password: "12345",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://www.fulek.com/nks/api/aw/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  return <h1>Hello {data.username}</h1>;
};

export default Login;
