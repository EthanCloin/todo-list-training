import "./TodoForm.css";
import Todo from "../models/Todo";
import React, { useState } from "react";

interface Props {
  addTodo: (todo: Todo) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState("");
  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ task: newTodo, isComplete: false });
    setNewTodo(() => "");
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
        className="add-textfield"
      />
      <input className="add-btn" type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
