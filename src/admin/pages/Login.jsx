import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/login.scss";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://defendo-001-site1.atempurl.com/api/v1/authentication/login",
        {
          emailOrUsername: username,
          password: password,
        }
      );
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      // navigate("/admin");
      window.location = "/admin";
    } catch (error) {
      console.log(error);
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
