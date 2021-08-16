import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({
    content: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setNotes(res.data));
  }, []);
  console.log(notes);

  const updateInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  // const changeHandler = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...notes];
  //   list[index][name] = value;
  //   setNotes(list);
  // }

  const delNotes = (index) => {
    const list = [...notes];
    list.splice(index, 1);
    setNotes(list);
  };

  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/notes", input)
      .then(() => axios.get("http://localhost:3001/notes"))
      .then((resp) => setNotes(resp.data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Notes to myself</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Input value={updateInput} submit={sendData} />
        <Note notes={notes} del={() => delNotes()} />
      </main>
    </div>
  );
}

export default App;
