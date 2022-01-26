import React, { useContext, useState } from "react";
import noteContext from "../Context/Notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { newNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const ClickonAdd = (e) => {
    e.preventDefault();
    newNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="my-3 fs-1 fw-bold text-center">Add new Note</h1>

      <form className="my-5 w-75 m-auto ContactForm d-inline-flex flex-wrap justify-content-center">
        {/* Title */}

        <input
          type="text"
          name="title"
          placeholder="Title Here"
          className="form-control my-1 fs-4 bg-success"
          minLength={5}
          value={note.title}
          onChange={onChange}
          id="title"
        />
        {/* Description */}

        <textarea
          id="description"
          name="description"
          onChange={onChange}
          className="form-control fs-4 my-1 form-message-area bg-success"
          placeholder="Description Here"
          rows="3"
          minLength={5}
          required
          value={note.description}
        ></textarea>

        {/* Tag */}

        <input
          id="tag"
          type="text"
          name="tag"
          list="TagsSuggest"
          onChange={onChange}
          placeholder="Tag Here"
          className="form-control my-1 fs-4 bg-success"
          required
          value={note.tag}
        />
        <datalist id="TagsSuggest">
          <option value="Personal">Personal</option>
          <option value="Resource">Resource</option>
          <option value="Study">Study</option>
          <option value="Task">Task</option>
          <option value="Other">Other</option>
        </datalist>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          onClick={ClickonAdd}
          className="btn btn-successs primaryButton ContactFormBTN my-1 fs-4 px-4 py-2"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
