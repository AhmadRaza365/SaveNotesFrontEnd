import React, { useContext } from "react";
import noteContext from "../Context/Notes/NoteContext";
import "./Noteitem.css";
import { Link } from "react-router-dom";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;
  return (
    <div className="col m-3">
      <div className="card m-auto carditem">
        <div className="card-body p-0">
          <div className="NoteHead">
            <h3 className="card-title p-2 fs-3 ">{note.title}</h3>
            <h5 className="card-title m-0 px-2 pb-2 fs-5">{note.tag}</h5>
          </div>
          <div className="NoteDesc ">
            <p className="card-text m-0 p-2 fs-5">{note.description}</p>
          </div>

          <div className=" d-flex justify-content-center py-2 NoteFoot">
            <Link
              className="fas fa-trash-alt icon fs-5 mx-2"
              style={{ color: "#11250A", textDecoration: "none" }}
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            >
              &#160;&#160;Delete
            </Link>
            <Link
              className="fas fa-edit icon fs-5 mx-2 "
              style={{ color: "#11250A", textDecoration: "none" }}
              onClick={() => {
                updateNote(note);
              }}
            >
              &#160;&#160;Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
