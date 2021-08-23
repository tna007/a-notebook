import "./App.css";
import Note from "./containers/Note";

function App() {
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
        <Note />
      </main>
    </div>
  );
}

export default App;
