import "./App.css";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";

function App() {
  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
