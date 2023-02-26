import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "../scss/login.scss";
import AuthService from "../services/AuthService";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async () => {
    await AuthService.login(username, password);
  };

  return (
    <div className="login">
      <Helmet>
        <title>login</title>
      </Helmet>
      <h1>login</h1>
      <div className="login__inputs">
        <label htmlFor="username">username or email</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">password</label>
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
