import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";
import { TodoInterface } from "../todo.model";

type TodoFormProps = {
  addTodo: (todo: TodoInterface) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<TodoInterface>({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">Sumbit</Button>
    </form>
  );
}

export default TodoForm