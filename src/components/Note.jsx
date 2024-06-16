import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdPushPin } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  const [showpin, setShowpin] = useState(false);

  return (
    <div
      className="note"
      onMouseOver={() => setShowpin(true)}
      onBlur={() => setShowpin(false)}
    >
      <div className="notepin">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        {showpin && <MdPushPin size={24} cursor="pointer" />}
      </div>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
  );
}

export default Note;
