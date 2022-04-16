import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import './css/Register.css'

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      window.location.pathname = '/'
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
      <h3> Register User </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <br />
      <br />
      <input
        placeholder="Password..."
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />
        <br />
        <br />
      <button className="registerButton" onClick={register}> Create User</button>
      <p>Already have an account? , <Link className="pregister" to='/login'>Sign in</Link></p>
    </div>
  );
};

export default Register;
