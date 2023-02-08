import React, { useState } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TaskList from "./components/TaskList/TaskList";

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
      <main className="App-main">
        <TaskList list={list} />
      </main>
    </>
  );
}

export default App;
