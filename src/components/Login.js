import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import './css/Login.css'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
        );
        window.location.pathname = '/'
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
      <h3> Login </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="Password..."
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
      />
        <br />
        <br />

      <button onClick={login}> Login</button>
      <p>Don't have an accoutn? , <Link className="pregister" to='/register'>Sign up</Link></p>
    </div>
  );
};

export default Login;
