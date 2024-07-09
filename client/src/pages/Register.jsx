/* eslint-disable react/button-has-type */
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import "../styles/register.scss";

function Register() {
  const [newemail, setemail] = useState("");
  const [newname, setname] = useState("");
  const [newpassword, setpassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div id="backH">
      <form className="form_register">
        <h1 style={{ color: "white" }}>Se connecter</h1>
        <input
          className="input_register"
          type="Email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email "
          id="username"
        />

        <input
          className="input_register"
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="username"
          id="username"
        />

        <input
          className="input_register"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          id="password"
        />

        <button onClick={onSubmit} className="btn_register">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Register;
