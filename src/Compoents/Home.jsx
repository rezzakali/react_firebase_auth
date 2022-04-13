import React from "react";
import { signInWithGoogle } from "../Firebase";

function Home() {
  return (
    <div style={{ widt: "50%", textAlign: "center", marginTop: "20px" }}>
      <button onClick={signInWithGoogle} className="btn btn-success">
        Sign in with google
      </button>
      <h4>{localStorage.getItem("name")}</h4>
      <h4>{localStorage.getItem("email")}</h4>
      <img
        src={localStorage.getItem("profilePic")}
        alt="image"
        style={{ width: "10%", borderRadius: "50%" }}
      />
    </div>
  );
}

export default Home;
