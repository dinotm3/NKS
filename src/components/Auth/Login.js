import React, { useState, useEffect, createContext, useContext } from "react";

const Login = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const isLoggedIn = token;
  useEffect(() => {
    async function login() {
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
      localStorage.setItem("token", data.token)
      // on Logout localStorage.clear()
      console.log(localStorage);
    }
    login();
  }, []);

  return (
  <h1>Hello {data.username}</h1>
  )
};

export default Login;
