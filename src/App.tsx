import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./models/Todo";

const testTodoListData: Todo[] = [
  {
    task: "walk a bit",
    isComplete: false,
  },
  {
    task: "have a snack",
    isComplete: true,
  },
  {
    task: "get shredded",
    isComplete: false,
  },
];

function App() {
  const [todoListData, setTodoListData] = useState(testTodoListData);
  const [formActive, setFormActive] = useState(false);
  return (
    <div className="App">
      <TodoList todoListData={todoListData} />
      {formActive && <TodoForm />}
      <button onClick={() => setFormActive(() => true)}>Add</button>
    </div>
  );
}

export default App;
