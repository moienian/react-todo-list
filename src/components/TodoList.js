import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";
export default function TodoList({ todos, toggleCompleted, removeTodo }) {
  return (
    <List className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}
