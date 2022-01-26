import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const host = "localhost:5000";

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the token and redirect to home page
      localStorage.setItem("token", json.token);
      history.push("/login");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="LoginPage">
        <div className="LeftContainer">
          <h1 className="fs-1 fw-bold text-center">Create your account</h1>

          <form
            className="my-5 w-75 m-auto ContactForm d-flex flex-column justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.name}
              onChange={onChange}
              id="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.email}
              onChange={onChange}
              id="email"
              aria-describedby="emailHelp"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.password}
              onChange={onChange}
              id="password"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              className="form-control my-1 fs-4 bg-success"
              value={credentials.cpassword}
              onChange={onChange}
              id="cpassword"
              required
            />
            <p
              className={
                credentials.password === credentials.cpassword
                  ? "d-none"
                  : "mx-1 fs-6 text-danger fw-lighter"
              }
            >
              Note: Password and Confirm Password should be same!
            </p>
            <p
              className={
                credentials.password.length >= 5 || credentials.password === ""
                  ? "d-none"
                  : "mx-1 fs-6 text-danger fw-lighter"
              }
            >
              Note: Password should be atleast 5 characters long!
            </p>

            <button
              type="submit"
              className="btn btn-success fs-3 px-5 my-1 primaryButton mw-auto "
              onClicK={handleSubmit}
              disabled={
                credentials.password !== credentials.cpassword ||
                credentials.password.length < 5
              }
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="RightContainer">
          <h1 className="fs-1 fw-bold text-center">Existing User?</h1>
          <p className="fs-3 mx-5 text-center">
            If you already have an account, please login!
          </p>

          <button
            type="submit"
            className="btn btn-success fs-3 px-5 my-1 SecondaryButton mw-auto "
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
