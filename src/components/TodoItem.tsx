import Todo from "../models/Todo";
import "./TodoItem.css";

interface Props {
  todoData: Todo;
}

const TodoItem = ({ todoData }: Props) => {
  return (
    <li className="TodoItem">
      <button>Complete</button>
      <p>{todoData.task}</p>
      <p>{todoData.isComplete}</p>
      <button>X</button>
    </li>
  );
};

export default TodoItem;
