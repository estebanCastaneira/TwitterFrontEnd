import { useState } from "react";
// import axios from "axios";
import "./login_styles.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <div id="parent_container" className="container">
        <div id="row" className="row mx-5 mx-lg-0">
          <div
            id="welcome_messasge"
            className="col d-none d-md-flex flex-column align-items-baseline justify-content-between rounded-start-3 p-5"
          >
            <img src="img/icons/twitter-logo-white.svg" style={{ height: "50px" }} />
            <span className="fw-semibold fs-4">Hey! Nice to see you again&#x1F970;</span>
          </div>
          <div id="form" className="col-12 col-md-6 col-lg-5 rounded-3">
            <h1 className="fw-semibold fs-2">Login</h1>
            <p>Ready to start using Twitter?</p>
            <form action="/login" method="POST">
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Email or username"
                  name="email"
                />
              </div>

              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small mt-2 pt-1 mb-0 text-center">
                  Don't have an account? <a href="/register">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
