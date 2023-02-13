import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../scss/login.scss";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(
        "https://irp.ramanacastle.com/api/login-admin",
        {
          email: username,
          password: password,
        }
      );
      alert("no error");
      console.log(data);
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div className="login">
      <h1>login</h1>
      <div className="login__inputs">
        <label htmlFor="username">username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">username</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button className="login__button" onClick={() => loginHandler()}>
        login
      </button>
    </div>
  );
};

export default Login;
