import React from "react";
import * as actionTypes from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

function NewNote() {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  let i = notes.length;

  const addNote = (text) => ({
    type: actionTypes.ADD_NOTE,
    id: i++,
    text: text,
    completed: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNote(e.target.noteInput.value));
    e.target.noteInput.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="noteInput" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default NewNote;
