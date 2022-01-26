import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";

const Login = (props) => {
  const host = "localhost:5000";

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the token and redirect to home page
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in Successfully", "success");
      history.push("/notes");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="LoginPage">
        <div className="LeftContainer">
          <h1 className="fs-1 fw-bold text-center">Login to your account</h1>

          <form
            className="my-5 w-75 m-auto ContactForm d-inline-flex flex-wrap justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.email}
              onChange={onChange}
              id="email"
              aria-describedby="emailHelp"
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.password}
              onChange={onChange}
              id="password"
            />

            <button
              type="submit"
              className="btn btn-success fs-3 px-5 my-1 primaryButton mw-auto "
              onClicK={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
        <div className="RightContainer">
          <h1 className="fs-1 fw-bold text-center">New Here?</h1>
          <p className="fs-3 mx-5 text-center">
            If you're a new user, then first create your account. It's free!
          </p>

          <button
            type="submit"
            className="btn btn-success fs-3 px-5 my-1 SecondaryButton mw-auto "
            onClick={() => {
              history.push("/signup");
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
