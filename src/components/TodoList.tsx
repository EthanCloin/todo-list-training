import TodoItem from "./TodoItem";
import Todo from "../models/Todo";
import "./TodoList.css";

interface Props {
  todoListData: Todo[];
}

const TodoList = ({ todoListData: todoListData }: Props) => {
  return (
    <ol className="TodoList">
      {todoListData.map((todo, idx) => (
        <TodoItem key={idx} todoData={todo} />
      ))}
    </ol>
  );
};

export default TodoList;
