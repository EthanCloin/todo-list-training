import TodoItem from "./TodoItem";
import Todo from "../models/Todo";
import "./TodoList.css";

interface Props {
  todoListData: Todo[];
  deleteTodo: (index: number) => void;
  onComplete: (index: number) => void;
}

const TodoList = ({ todoListData, deleteTodo, onComplete }: Props) => {
  return (
    <div className="TodoList">
      <h1>To-Do List</h1>
      <h3>A place to store your todos</h3>
      <ol className="todo-container">
        {todoListData.map((todo, idx) => (
          <TodoItem
            key={idx}
            todoData={todo}
            deleteTodo={() => deleteTodo(idx)}
            onComplete={() => onComplete(idx)}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
