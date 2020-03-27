import React from "react";
import WelcomePage from "./WelcomePage";
import Axios from "axios";
import { useState } from "react";
let ForgetComp = () => {
  const [display, setDisplay] = useState("block");
  let handleSubmit = e => {
    e.preventDefault();
    let data = new FormData(e.target);
    Axios.post("http://localhost:8082/sendMail", data).then(reseult => {});
    setDisplay("none");
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <WelcomePage />
          <div className="content_rgt">
            {this.state.display === "block" ? (
              <div
                className="register_sec"
                style={{ display: this.state.display }}
              >
                <h1>Forgot Password</h1>
                <form onSubmit={this.handleSubmit}>
                  <ul>
                    <li>
                      <span>Enter E-mail ID</span>
                      <input
                        type="text"
                        placeholder="User@gmail.com"
                        name="email"
                      />
                    </li>
                    <li>
                      <input type="submit" />
                    </li>
                  </ul>
                </form>
              </div>
            ) : (
              <h1>Reset Link sent to your email address</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetComp;
