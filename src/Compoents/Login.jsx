import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };
  const logOut = async () => {
    try {
      const result = await signOut(auth);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <h1>Login With Email and Password</h1>

      <h1 className="text-center">Register New user</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="helpId"
          placeholder="Enter your email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          aria-describedby="helpId"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
      </div>
      <button type="button" className="btn btn-success" onClick={register}>
        Create
      </button>
      <br />
      <br />
      <h1 className="text-center">Login</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="helpId"
          placeholder="Enter your email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          aria-describedby="helpId"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
      </div>
      <button type="button" className="btn btn-success" onClick={login}>
        Login
      </button>
      <br />
      <br />
      {user?.email}
      <div className="btn btn-danger" onClick={logOut}>
        Sign Out
      </div>
    </div>
  );
}

export default Login;
