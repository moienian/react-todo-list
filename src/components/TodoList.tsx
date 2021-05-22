import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";
import { TodoInterface } from "../todo.model";

interface TodoListProps {
  todos: TodoInterface[],
  toggleCompleted: (id: string) => void,
  removeTodo: (id: string) => void
}

 const TodoList: React.FC<TodoListProps> = ({ todos, toggleCompleted, removeTodo }) => {
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

export default TodoList