/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../styles/login.scss";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser({email:Email,password:Password}, navigate))
  };

  return (
    <div id="login">
      <form className="form_login" onSubmit={onSubmit}>
        <label htmlFor="username">email</label>
        <input
          className="input_register"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          id="username"
        />
        <label htmlFor="password">Passwordc</label>
        <input
          className="input_register"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <button className="btnlogin" onClick={onSubmit}>
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
