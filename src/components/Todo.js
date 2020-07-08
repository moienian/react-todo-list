import React from "react";

export default function Todo({ todo, toggleCompleted, removeTodo }) {
  function handleCheckboxClick() {
    toggleCompleted(todo.id);
  }

  function handleRemoveButton(id) {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveButton}>X</button>
    </div>
  );
}
