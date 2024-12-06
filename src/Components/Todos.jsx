import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../Feature/todoSlice";
import { useEffect, useState } from "react";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [toggleEdit, setToggleEdit] = useState("Edit");
  const handleToggleEdit = () => {
    if (toggleEdit === "Edit") {
      setToggleEdit("Save");
    }
  };

  const handleSave = () => {};
  useEffect(() => {
    const savedTodo = localStorage.getItem("todos");
    if (savedTodo) {
      try {
        const parsedTodo = JSON.parse(savedTodo);
        parsedTodo.forEach((todo) => dispatch(addTodo(todo.text)));
      } catch (err) {
        console.log(err.msg);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (todos.length > 0) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="text-left  min-w-80  mt-4 px-2 ">
      {todos.map((todo) => (
        <li
          className={`relative ${
            !todo && "hidden"
          } bg-slate-700 px-4 list-none rounded-lg mb-2 font-bold`}
          key={todo.id}
        >
          {todo.text}
          <button
            className="absolute right-4"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>

          <button
            id="edit"
            onClick={`${toggleEdit !== "Edit" ? handleSave : ""}`}
            className="absolute right-10"
          >
            {toggleEdit}
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
