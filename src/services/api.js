import { headers } from "../utils/constants";

// async function getAll() {
//   const requestOptions = {
//     method: "GET",
//     headers: headers,
//   };
//   return await fetch(process.env.REACT_APP_API_URL, requestOptions);
// }

/* async function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: headers,
  };
  const response = await fetch(BASE_URL + id, requestOptions);
  const data = await response.json();
  console.log("data", data);
}

async function create(input, id) {
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: input,
  };
  const response = await fetch(BASE_URL + id, requestOptions);
  const data = await response.json();
  console.log("data", data);
}

async function deleteById(id) {
  const requestOptions = {
    method: "DELETE",
    headers: headers,
  };
  const response = await fetch(BASE_URL + id, requestOptions);
  const data = await response.json();
  console.log("data", data);
}

async function update(input, id) {
  const requestOptions = {
    method: "PUT",
    headers: headers,
    body: input,
  };
  const response = await fetch(BASE_URL + id, requestOptions);
  const data = await response.json();
  console.log("data", data);
} */

export { getAll /* getById, create, update, deleteById */ };
