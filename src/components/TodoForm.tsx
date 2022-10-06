import "./TodoForm.css";
import Todo from "../models/Todo";
import React, { useState } from "react";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const onSave = (e: React.FormEvent): Todo => {
    e.preventDefault();
    return { task: newTodo, isComplete: false };
  };
  return (
    <form className="TodoForm" onSubmit={(e) => onSave(e)}>
      <label htmlFor="addTaskTextField">Enter a new task:</label>
      <input
        id="addTaskTextField"
        name="addTaskTextField"
        type="text"
        placeholder="Add your to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
