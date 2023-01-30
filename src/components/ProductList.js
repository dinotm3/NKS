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
      
      fetch("http://www.fulek.com/nks/api/aw/customers", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    fetchData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
      </table>
      <div>
        {" "}
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
