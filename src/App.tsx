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

  const addTodo = (todo: Todo) => {
    setTodoListData([...todoListData, todo]);
  };

  const deleteTodo = (index: number) => {
    setTodoListData(todoListData.filter((todo, idx) => index !== idx));
  };

  const filterTodos = (searchTerm: string) => {
    setTodoListData(
      todoListData.filter((todo) => todo.task.includes(searchTerm))
    );
  };
  const setTodoComplete = (index: number) => {
    setTodoListData((prev) => {
      const newTodos = [...prev];
      newTodos[index].isComplete = true;
      return newTodos;
    });
  };

  return (
    <div className="App">
      <TodoList
        todoListData={todoListData}
        deleteTodo={deleteTodo}
        onComplete={setTodoComplete}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
