import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import NotesContainer from "./components/NotesContainer";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [data, setData] = useState({
    pinned: [],
    others: [],
  });

  useEffect(() => {
    const notes = window.localStorage.getItem("notes");
    if (notes) {
      const notesObj = JSON.parse(notes);
      setNotes(notesObj);
    }
  }, []);

  useEffect(() => {
    const pinnedNotes = notes.filter((note) => note.pinned);
    const otherNotes = notes.filter((note) => !note.pinned);

    setData({
      others: otherNotes,
      pinned: pinnedNotes,
    });

    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      const newNotes = [...prevValue, newNote];
      return newNotes;
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
      <CreateArea onAdd={addNote} />

      <div className="container">
        {data.pinned.length > 0 && (
          <>
            <NotesContainer
              notes={data.pinned}
              label="Pinned"
              handleDeleteNotes={deleteNotes}
            />
            <hr />
          </>
        )}
        <NotesContainer
          notes={data.others}
          label="Others"
          handleDeleteNotes={deleteNotes}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
