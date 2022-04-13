import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";

function Phone() {
  const cCode = "+91";
  const [phone, setPhone] = useState(cCode);
  const [otp, setOtp] = useState("");

  const generatedCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignInSubmit();
          console.log("captcha generated");
        },
        defaulCountry: "IN",
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      alert("Please enter a valid phone number with country code");
    } else {
      generatedCaptcha();
      const phoneNumber = phone;
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("OTP Send");
        })
        .catch(() => {
          alert("Please enter your phone number with country code");
        });
    }
  };
  const submitOtp = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      alert("Enter the OTP just you received");
    } else {
      const code = otp;
      alert(`Your OTP is ${code}`);
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div className="container">
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            name="tel"
            id="tel"
            aria-describedby="helpId"
            placeholder="Enter a valid phone number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-success">Send OTP</button>
      </form>
      <br />
      <br />
      <form onSubmit={submitOtp}>
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            OTP
          </label>
          <input
            type="number"
            className="form-control"
            name="otp"
            id="otp"
            aria-describedby="helpId"
            placeholder="OTP"
            onChange={(event) => {
              setOtp(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Confirm OTP
        </button>
      </form>
    </div>
  );
}

export default Phone;
