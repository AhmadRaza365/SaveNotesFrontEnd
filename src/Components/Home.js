import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import ResponsiveDevices from "./ResponsiveDevices.jpg";

function Home(props) {
  let history = useHistory();

  return (
    <>
      <div className="Homehero mw-100">
        <h2 className="fs-1 fw-bold">
          Save your notes
          <br />
          wherever you are.
        </h2>
        <button
          className="btn btn-successs primaryButton mx-3 fs-5 px-4 py-2 fw-bold"
          onClick={() => {
            !localStorage.getItem("token")
              ? history.push("/login")
              : history.push("/notes");
          }}
        >
          Try SaveNotes
        </button>
      </div>

      <h2 className="fs-1 text-center fw-bold my-3">Always Within Reach</h2>
      <p className="fs-4 text-center mx-5">
        SaveNotes works on your phone, tablet and computer. Every time you add a
        note, it syncs across your devices, so your important notes are always
        with you.
      </p>
      <img className=" mw-100 " src={ResponsiveDevices} alt="Devices" />

      <div className="HomeBottomCTO mw-100 py-5">
        <h2 className="fs-1 text-center fw-bold my-3">
          Try SaveNotes today, it is Free!
        </h2>
        <button
          className="btn btn-successs primaryButton mx-3 fs-5 px-4 py-2 fw-bold"
          onClick={() => {
            !localStorage.getItem("token")
              ? history.push("/login")
              : history.push("/notes");
          }}
        >
          Try SaveNotes
        </button>
      </div>
    </>
  );
}

export default Home;
