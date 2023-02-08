import React, { useState, useEffect } from "react";
import getToken from "../utils/storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState();
  const onNameChange = (e) => setName(e.target.value.toLowerCase());
  const onSurnameChange = (e) => setSurname(e.target.value.toLowerCase());
  const onEmailChange = (e) => setEmail(e.target.value.toLowerCase());
  const onTelephoneChange = (e) => setTelephone(e.target.value);

  async function addCustomer() {
    let token = getToken();
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .post("http://www.fulek.com/nks/api/aw/addcustomer", {
        Name: name,
        Surname: surname,
        Email: email,
        Telephone: telephone,
        CityID: 1,
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  useEffect(() => {
    let token = getToken();
    if (token == null) {
      navigate("/");
    }
  }, []);
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  onChange={onNameChange}
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Surname"
                  onChange={onSurnameChange}
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email"
                  onChange={onEmailChange}
                />
              </div>

              <div className="mb-6">
                <input
                  type="phone"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Telephone"
                  onChange={onTelephoneChange}
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  onClick={addCustomer}
                  className="inline-block px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Add customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Add;
