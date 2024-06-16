import React from "react";
import Note from "./Note";

const NotesContainer = ({ notes, label, handleDeleteNotes }) => {
  return (
    <div className="notes-container">
      <h5>{label}</h5>
      {notes &&
        notes?.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleDeleteNotes}
          />
        ))}
    </div>
  );
};

export default NotesContainer;
