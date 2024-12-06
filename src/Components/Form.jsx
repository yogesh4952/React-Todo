import { useState } from "react";
import { addTodo } from "../Feature/todoSlice";
import { useDispatch } from "react-redux";

function Form() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Please enter a task!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter Todo Here"
          className="px-3 py-2 rounded-lg text-black mr-2"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className=" bg-green-600 px-3 py-2 rounded-lg font-bold"
        >
          Add todo
        </button>
      </form>
    </>
  );
}

export default Form;
