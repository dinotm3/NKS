import React, { useState, useEffect } from "react";
import getToken from "../utils/storage";
import { useNavigate } from "react-router-dom";

// Add / delete, customer info, bills, bill items
const Add = () => {
  const axios = require("axios");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      let token = getToken();
      if (token == null){
        navigate("/")
      }
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + token);

      var raw = JSON.stringify({
        Name: "Test",
        Surname: "Customer",
        Email: "test.customer@gmail.com",
        Telephone: "123456789",
        CityId: 1,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://www.fulek.com/nks/api/aw/addcustomer", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
    fetchData();
  }, []);
  return <h1>Add</h1>;
};

export default Add;
