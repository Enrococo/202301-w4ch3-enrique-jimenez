import React, { FC } from "react";
import "./TaskList.css";

interface TaskListProps {
  list: string[];
}

const TaskList: FC<TaskListProps> = ({ list }) => {
  return (
    <ul className="toDoList">
      <h1>ToDo List</h1>
      <div className="toDoList__menu">
        <button className="button">All</button>
        <button className="button">Done</button>
        <button className="button">ToDo</button>
      </div>
      <li key={-2} className="toDoElements">
        Abrazar a Lore y Lara
        <div className="toDoElements__div">
          <input type="checkbox" />
          <i className="fa-solid fa-trash"></i>
        </div>
      </li>
      <li key={-1} className="toDoElements">
        Completar el challencito de hoy
        <div className="toDoElements__div">
          <input type="checkbox" />
          <i className="fa-solid fa-trash"></i>
        </div>
      </li>
      {list.map((liElement, i) => (
        <li key={i} className="toDoElements">
          {liElement}
          <div className="toDoElements__div">
            <input type="checkbox" />
            <i className="fa-solid fa-trash"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
