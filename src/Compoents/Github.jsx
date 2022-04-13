import React from "react";
import { signInWithGithub } from "../Firebase";

function Github() {
  return (
    <div className="container">
      <h1 className="text-center">Login with Github Account</h1>
      <button className="btn btn-success" onClick={signInWithGithub}>
        Sign in with Github
      </button>
    </div>
  );
}

export default Github;
