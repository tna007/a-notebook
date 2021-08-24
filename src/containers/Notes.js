import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/actions";

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleNote = (id) => ({
    type: actionTypes.TOGGLE_NOTE,
    id: id,
  });

  return (
    <ul>
      {notes.map((note) => (
        <li
          key={note.id}
          onClick={() => dispatch(toggleNote(note.id))}
          style={{ textDecoration: note.completed ? "line-through" : "none" }}
        >
          {note.text}
        </li>
      ))}
    </ul>
  );
};

export default Notes;
