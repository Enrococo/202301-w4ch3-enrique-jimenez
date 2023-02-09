import React, { FC } from "react";
import "./TaskList.css";

interface TaskListProps {
  list: string[];
}

const TaskList: FC<TaskListProps> = ({ list }) => {
  return (
    <ul className="toDoList">
      <h1>ToDo List</h1>
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
