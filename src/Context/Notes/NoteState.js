import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "localhost:5000";

  const initialnotes = [];

  const [notes, setNotes] = useState(initialnotes);

  //   Fetch all Notes
  const getNotes = async () => {
    //  Api Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  //   Add a Note
  const newNote = async (title, description, tag) => {
    // Api Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //   Delete a Note
  const deleteNote = async (id) => {
    //  Api Call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    const notesafterdelete = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(notesafterdelete);
  };

  //   Edit a Note
  const editNote = async (id, title, description, tag) => {
    // Api Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    // Login to Edit the Note
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(notes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, newNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
