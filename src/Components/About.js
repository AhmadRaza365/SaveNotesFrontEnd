import React from "react";
import { Link } from "react-router-dom";
import Ahmad_Profile from "./Ahmad_Profile.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <h2 className=" fs-1 text-center fw-bold my-3">About the Developer</h2>

      <div className="AboutSection my-5">
        <p className="fs-3 mx-3">
          Hi, I hope you will be fine and enjoying good health. I am Ahmad Raza
          from Pakistan. I am a student of Bachelor of Software Engineering. And
          also a full stack web developer, UI/UX designer and content creator.{" "}
          <br /> <br /> If we talk about SaveNotes, it's not a commercial
          product. But you can use it. I just developed it to enhance my
          Development skills and to add some projects to my portfolio.
        </p>

        <img className="" src={Ahmad_Profile} alt="Developer's Profile" />
      </div>

      <h2 className=" fs-1 text-center fw-bold my-3">You can find me here</h2>

      <div className="AboutSocialIcons">
        {/* FaceBook icon */}
        <Link
          to={{ pathname: "https://www.facebook.com/ahmadraza.raza.54772/" }}
          target="_blank"
        >
          <i className="fab fa-facebook fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* instagram icon */}
        <Link
          to={{ pathname: "https://www.instagram.com/ahmadraza0300/" }}
          target="_blank"
        >
          <i class="fab fa-instagram fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* Twitter icon */}
        <Link
          to={{ pathname: "https://twitter.com/Ahmad365Raza" }}
          target="_blank"
        >
          <i class="fab fa-twitter fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* LinkedIn icon */}
        <Link
          to={{ pathname: "https://www.linkedin.com/in/ahmadraza30/" }}
          target="_blank"
        >
          <i class="fab fa-linkedin fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* Github icon */}
        <Link
          to={{ pathname: "https://github.com/AhmadRaza365" }}
          target="_blank"
        >
          <i class="fab fa-github fs-1 mx-2 mb-5 "></i>
        </Link>
      </div>
    </>
  );
};

export default About;
