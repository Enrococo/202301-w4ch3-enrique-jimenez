import React, { FC, FormEventHandler } from "react";
import "./TaskCreator.css";

interface TaskCreatorProps {
  onUpdate: (toDo: string) => void;
}

const TaskCreator: FC<TaskCreatorProps> = ({ onUpdate }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onUpdate(event.currentTarget.item.value);
  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      <input
        id="formInput"
        className="to-do-form__input"
        type="text"
        name="item"
        placeholder="New ToDo"
      ></input>

      <button className="button" type="submit" value="Submit">
        Add new task
      </button>
    </form>
  );
};

export default TaskCreator;
