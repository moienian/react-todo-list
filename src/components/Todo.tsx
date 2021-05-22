import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { TodoInterface } from "../todo.model";

interface TodoProps {
  todo: TodoInterface,
  toggleCompleted: (id: string) => void,
  removeTodo: (id: string) => void
}

 const Todo: React.FC<TodoProps> = ({ todo, toggleCompleted, removeTodo }) => {

  function handleCheckboxClick() {
    toggleCompleted(todo.id);
  }

  function handleRemoveButton() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveButton}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo