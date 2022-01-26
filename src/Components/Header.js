import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Header.css";
import "../index.css";
import SaveNotesLogo from "./SaveNotes.svg";

function Header() {
  let location = useLocation();
  let history = useHistory();
  const clickOnLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const gotoLogin = () => {
    history.push("/login");
  };

  return (
    <nav
      collapseOnSelect
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <div className="container-fluid mx-3 my-2">
        <Link className="navbar-brand   fs-2" to="/">
          <img
            src={SaveNotesLogo}
            className="headerlogo"
            alt="SaveNotes Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-3">
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/" || location.pathname === "/notes"
                    ? "active"
                    : ""
                } `}
                aria-current="page"
                to={!localStorage.getItem("token") ? "/" : "notes"}
              >
                {!localStorage.getItem("token") ? "Home" : "Notes"}
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                } `}
                to="/contact"
              >
                Contact Me
              </Link>
            </li>

            {!localStorage.getItem("token") ? (
              <button
                className="btn btn-successs primaryButton mx-3 fs-4 px-4 py-2 fw-bold"
                onClick={gotoLogin}
              >
                Get Started
              </button>
            ) : (
              <button
                className="btn btn-successs primaryButton mx-3 fs-4 px-4 py-2 fw-bold"
                onClick={clickOnLogout}
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
