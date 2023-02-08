import React, { FC } from 'react';
import './List.css';

interface ToDoListProps {
  list: string[];
}

const ToDoList: FC<ToDoListProps> = ({ list }) => {
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

export default ToDoList;
