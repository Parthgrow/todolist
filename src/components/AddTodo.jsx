import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { nanoid } from "nanoid";

function AddToDo() {
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
  const handleAddtodo = () => {
    if (input) {
      const todo = {
        id: nanoid(),
        text: input,
        date: date,
        checkbox: false,
        notes: "This is sample todo content",
      };
      dispatch(addTodo(todo));
      setInput("");
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handleDate = (e) => {
    console.log("value in event");
    console.log(e.target.value);
    setDate(e.target.value);
    console.log("Value in date");
    console.log(date);
  };

  const handleReset = () => {
    localStorage.removeItem("todos");
    alert("Local storage is cleared");
  };

  return (
    <div className="flex gap-5 mx-2 border-2 border-black px-2 py-4 rounded-sm">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Add to do"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="px-2 mt-4"
        />
        <p>
          {flag && (
            <div className="text-red-600 font-bold">
              Please enter a valid to-do
            </div>
          )}
        </p>
      </div>

      <input
        type="date"
        min={today}
        value={date}
        onChange={handleDate}
        className="border-none focus:border-none"
      />

      <button
        onClick={handleAddtodo}
        className="bg-black text-white h-fit px-4 py-2 my-2 rounded-sm"
      >
        Add to do
      </button>
      <button
        className="bg-black px-4 py-2 text-white rounded-sm my-2"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default AddToDo;
