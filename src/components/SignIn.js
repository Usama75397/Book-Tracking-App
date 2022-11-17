import React, { useState } from "react";
import data from "./data.json";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [sign, setSign] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSign((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    data.data.map((d) => {
      if (sign.email === d.email && sign.password === d.password) {
        history.push("/shelf")
        setSign((previousState) => {
          return { ...previousState, email: "", password: "" };
        });
        console.log(d.email);
        console.log(sign);
      }
    });
    event.preventDefault();
  };

  return (
    <div>
      <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
    </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div>
          </div>
          <input
            type="email"
            placeholder="E-mail"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={sign.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={sign.password}
          />

          <button className="form--submit" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
