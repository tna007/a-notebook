import "./App.css";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";

import { initializeNotes } from "./store/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
