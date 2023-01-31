import React, { useState, useEffect } from "react";
import { getAll } from "../services/api";
import { headers } from "../utils/constants";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const response = await fetch("http://www.fulek.com/nks/api/aw/customers", requestOptions);
      const data = await response.json();
      console.log(data);  
      setProducts(data);      
    }
    fetchData();
  }, []);

  return (
    <>
      <table cellSpacing="2px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
          </tr>
        </thead>
      </table>
      <ul>
        {" "}
        {products.map((product) => (
          <li key={product.Id}>{product.Name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
