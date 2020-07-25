import React, { useReducer, useEffect } from "react";
import "./App.css";
import StudentsList from "./StudentsList/StudentsList";
import AgeList from "./AgeList/AgeList";
import LevelList from "./LevelList/LevelList";
import reducer from "./State/reducer";
import initialState from "./State/initialState";

// Container - Component with state
function App() {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <div className="App">
      {/* studentslist */}
      <StudentsList students={state} className="students__component" />
      {/* age list */}
      <AgeList className="age__component" />
      {/* Level */}
      <LevelList className="level__component" />
    </div>
  );
}

export default App;
