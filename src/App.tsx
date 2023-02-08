import React, { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator/TaskCreator";

function App() {
  const [list, updateList] = useState<string[]>([]);

  function getInput(text: string) {
    updateList(list.concat(text));
    console.log(list);
  }
  return (
    <>
      <header className="App-header">
        <h1>TodoInput</h1>
        <TaskCreator onUpdate={getInput} />
      </header>
    </>
  );
}

export default App;
