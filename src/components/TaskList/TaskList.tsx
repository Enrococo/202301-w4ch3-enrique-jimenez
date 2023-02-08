import React, { FC } from "react";
import "./TaskList.css";

interface TaskListProps {
  list: string[];
}

const TaskList: FC<TaskListProps> = ({ list }) => {
  return (
    <ul className="toDoList">
      <h1>Shopping List</h1>
      {list.map((liElement, i) => (
        <li key={i} className="toDoElements">
          {liElement}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
