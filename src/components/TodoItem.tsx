import Todo from "../models/Todo";
import "./TodoItem.css";

interface Props {
  todoData: Todo;
  deleteTodo: () => void;
}

const TodoItem = ({ todoData, deleteTodo }: Props) => {
  // should I have a local state variable to track the completed status here?
  // thinking add a setter up in the App component and pass it down

  return (
    <li className="TodoItem">
      <button className="complete-btn">Complete</button>
      <p>{todoData.task}</p>
      <p>{todoData.isComplete.toString()}</p>
      <button className="delete-btn" onClick={deleteTodo}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
