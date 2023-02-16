import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodo(todos);
        break;
    }
  };

  return (
    <>
      <header>
        <h1>Manoj's Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        filteredTodo={filteredTodo}
      />
    </>
  );
};

export default App;
