import Todo from "../models/Todo";
import "./TodoItem.css";

interface Props {
  todoData: Todo;
  deleteTodo: () => void;
  onComplete: () => void;
}

const TodoItem = ({ todoData, deleteTodo, onComplete }: Props) => {
  // should I have a local state variable to track the completed status here?
  // thinking add a setter up in the App component and pass it down

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
