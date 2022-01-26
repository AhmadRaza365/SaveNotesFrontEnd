import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h2 className=" fs-1 text-center fw-bold my-3">
        You can contact me via email.
      </h2>

      <form
        action="https://formsubmit.co/ahmadrazabhatti30@gmail.com"
        method="POST"
        name="EmailForm"
        className="ContactForm d-flex flex-column"
      >
        <div className="ContactFormRow">
          <div className="ContactFormRowChild1 my-1">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control fs-4 mx-2 bg-success "
              id="name"
              required
              aria-describedby="nameHelp"
            />
          </div>

          <div className="ContactFormRowChild2 my-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control fs-4 mx-2 bg-success"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="form-control fs-4 mx-2 my-1 bg-success"
          id="name"
          required
          aria-describedby="nameHelp"
        />

        <textarea
          className="form-control fs-4 m-2 my-1 form-message-area bg-success"
          placeholder="Message"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>

        <button
          type="submit"
          className="btn btn-successs primaryButton ContactFormBTN my-1 fs-4 px-4 py-2"
        >
          Send Message
        </button>
      </form>

      <h2 className=" fs-1 text-center fw-bold my-3">
        You can also contact me via social media.
      </h2>

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
          <i className="fab fa-instagram fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* Twitter icon */}
        <Link
          to={{ pathname: "https://twitter.com/Ahmad365Raza" }}
          target="_blank"
        >
          <i className="fab fa-twitter fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* LinkedIn icon */}
        <Link
          to={{ pathname: "https://www.linkedin.com/in/ahmadraza30/" }}
          target="_blank"
        >
          <i className="fab fa-linkedin fs-1 mx-2 mb-5 "></i>
        </Link>

        {/* WhatsApp icon */}
        <Link to={{ pathname: "https://wa.me/923001312712" }} target="_blank">
          <i className="fab fa-whatsapp fs-1 mx-2 mb-5"></i>
        </Link>
      </div>
    </>
  );
};

export default Contact;
