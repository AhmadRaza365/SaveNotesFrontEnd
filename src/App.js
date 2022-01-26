import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header.js";
import About from "./Components/About.js";
import Home from "./Components/Home.js";
import Notes from "./Components/Notes.js";
import Alert from "./Components/Alert.js";
import Contact from "./Components/Contact.js";

import NoteState from "./Context/Notes/NoteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Header />
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/notes">
              <Notes showAlert={showAlert} />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
