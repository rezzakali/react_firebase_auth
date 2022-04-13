import React from "react";
import { signInWIthFacebook } from "../Firebase";

function Facebook() {
  return (
    <div className="container mt-5">
      <button onClick={signInWIthFacebook}>Login with Facebook</button>
    </div>
  );
}

export default Facebook;
