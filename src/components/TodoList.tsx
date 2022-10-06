import TodoItem from "./TodoItem";
import Todo from "../models/Todo";
import "./TodoList.css";

interface Props {
  todoListData: Todo[];
}

const TodoList = ({ todoListData: todoListData }: Props) => {
  return (
    <div className="TodoList">
      <h1>To-Do List</h1>
      <h3>A place to store your todos</h3>
      <ol>
        {todoListData.map((todo, idx) => (
          <TodoItem key={idx} todoData={todo} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
