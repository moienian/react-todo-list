import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Todo({ todo, toggleCompleted, removeTodo }) {
  function handleCheckboxClick() {
    toggleCompleted(todo.id);
  }

  function handleRemoveButton(id) {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveButton}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}
