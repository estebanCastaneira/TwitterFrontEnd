import { useState } from "react";
import { setToken } from "../redux/userSlice";
import axios from "axios";
import "./login_styles.css";

import { useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [firstnameValue, setFirstname] = useState("");
  const [lastnameValue, setLastname] = useState("");
  const [emailValue, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch(setToken);
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  async function handleLogin(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/token",
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });
    console.log(response.data.user);

    const token = response.data.token;
    if (token) {
      dispatch(setToken(token));
      navigate("/profile");
    } else {
      navigate.goBack();
    }
  }

  function handleSignup(event) {
    event.preventDefault();
  }

  return (
    <>
      <div id="parent_container">
        <section id="child_container" className="container">
          <article id="row" className="row mx-5 mx-lg-0">
            <div
              id="welcome_messasge"
              className="col d-none d-md-flex flex-column align-items-baseline justify-content-between rounded-start-3 p-5"
            >
              <img src="img/icons/twitter-logo-white.svg" style={{ height: "50px" }} />
              {isLoginPage ? (
                <span className="fw-semibold fs-4">Hey! Nice to see you again&#x1F970;</span>
              ) : (
                <span className="fw-semibold fs-4">Hi! Welcome to Twitter Clone&#128075;</span>
              )}
            </div>
            <div id="form" className="col-12 col-md-6 col-lg-5 rounded-3">
              <h1 className="fw-semibold fs-2">{isLoginPage ? "Login" : "Sign Up"}</h1>
              <p>
                {isLoginPage
                  ? "Ready to start using Twitter?"
                  : "Create an account and start using Twitter"}
              </p>
              {isLoginPage ? (
                <form action="/login" method="POST">
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email or username"
                      name="email"
                      value={emailValue}
                      onChange={(event) => setEmail(event.target.value)}
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
                      value={passwordValue}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <p className="small mt-2 pt-1 mb-0 text-center">
                      Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                  </div>
                </form>
              ) : (
                <form encType="multipart/form-data" method="post">
                  {/* <!-- First Name input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="firstname"
                      id="firstname"
                      className="form-control form-control-lg"
                      placeholder="First name"
                      name="firstname"
                      value={firstnameValue}
                      onChange={(event) => setFirstname(event.target.value)}
                      required
                    />
                  </div>
                  {/* <!-- Last Name input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="lastname"
                      id="lastname"
                      className="form-control form-control-lg"
                      placeholder="Last name"
                      name="lastname"
                      value={lastnameValue}
                      onChange={(event) => setLastname(event.target.value)}
                      required
                    />
                  </div>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      name="email"
                      value={emailValue}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  {/* <!-- Username input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="username"
                      id="username"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      name="username"
                      value={usernameValue}
                      onChange={(event) => setUsername(event.target.value)}
                      required
                    />
                  </div>
                  {/* <!-- Image input --> */}
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="file"
                      id="avatar"
                      name="avatar"
                      onChange={(event) => setAvatar(event.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      name="password"
                      value={passwordValue}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: " 2.5rem" }}
                      onSubmit={handleSignup}
                    >
                      Sign up
                    </button>
                    <p className="small mt-2 pt-1 mb-0 text-center">
                      Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default Login;
