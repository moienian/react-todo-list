import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoInterface } from "./todo.model";



const LOCAL_STORAGE_KEY: string = "react-todo-list-todos";

const App: React.FC = () =>  {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const localTodo: string | null = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    const storageTodos = localTodo !== null ? JSON.parse(localTodo) : undefined;
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo: TodoInterface) {
    setTodos([todo, ...todos]);
  }

  function toggleCompleted(id: string) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        <p>Todo List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      </Typography>
    </div>
  );
}

export default App;
