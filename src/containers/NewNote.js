import React from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

import { createNote } from "../store/reducer";

function NewNote() {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNote = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value;
    dispatch(createNote(text));
    e.target.noteInput.value = "";
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" name="noteInput" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default NewNote;
