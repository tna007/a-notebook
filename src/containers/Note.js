import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions";

class Note extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(e.target.note.value);
    e.target.note.value = "";
  };

  render() {
    return (
      <div>
        <h1>Your note: {this.props.storedNotes.length}</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" name="note"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <ul>
            {this.props.storedNotes.map((note) => (
              <li key={note.id} onClick={() => this.props.deleteNote(note.id)}>
                {note.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storedNotes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (text) => dispatch({ type: actionTypes.ADD_NOTE, data: text }),
    deleteNote: (id) =>
      dispatch({ type: actionTypes.DELETE_NOTE, payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
