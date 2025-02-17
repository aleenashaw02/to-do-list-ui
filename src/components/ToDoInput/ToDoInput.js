import { useState } from "react";

const ToDoInput = ({ handleAddTodo, value, setValue  }) => {
  return (
    <header className="toDoInput">
      <input
      value={value}
        className="toDoInputField"
        placeholder="What you have to do?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="toDoAddButton"
        onClick={() => {
          handleAddTodo(value);
          setValue("");
        }}
      >
        ADD
      </button>
    </header>
  );
};
export default ToDoInput;
