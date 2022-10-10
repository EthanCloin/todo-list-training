import Todo from "../models/Todo";
import "./TodoItem.css";

interface Props {
  todoData: Todo;
  deleteTodo: () => void;
  onComplete: () => void;
}

const TodoItem = ({ todoData, deleteTodo, onComplete }: Props) => {
  return (
    <li className="TodoItem">
      {!todoData.isComplete && (
        <button className="complete-btn" onClick={onComplete}>
          Complete
        </button>
      )}
      <p className={todoData.isComplete ? "completed" : ""}>{todoData.task}</p>
      <button className="delete-btn" onClick={deleteTodo}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
