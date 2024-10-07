import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCheck } from "../features/todoSlice";
import OpenTodoComp from "./OpenTodoComp";
import { AiFillAlert } from "react-icons/ai";

function TodoComponent({ todo }) {
  const [openTask, setOpenTask] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [nearValue, setNearValue] = useState(0);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setCheck(todo.checkbox);
  };

  const handleCheck = (id) => {
    dispatch(updateCheck(id));
  };

  const isNearby = (dateStr) => {
    if (todo.checkbox) {
      return false;
    }
    const inputDate = new Date(dateStr); // Parse the input date
    const currentDate = new Date(); // Get current date

    // Set time to the start of the day to avoid time differences affecting the calculation
    inputDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    // Calculate the difference in time and convert to days
    const diffTime = inputDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setNearValue(diffDays);

    // Check if the difference is 5 days or less
    return Math.abs(diffDays) <= 5;
  };

  useEffect(() => {
    setIsNear(isNearby(todo.date));
  }, []);

  return (
    <div className="flex flex-col gap-2 my-2 ">
      <div className="flex flex-wrap gap-2">
        <input
          type="checkbox"
          checked={todo.checkbox}
          onClick={() => {
            handleCheck(todo.id);
          }}
        />
        <p className="text-base">{todo.text}</p>
        <p className="text-base">{todo.date}</p>
        <button
          className="bg-black text-sm py-[3px] text-white h-fit px-[3px] hover:text-gray-400 rounded-sm border-gray-700 border-[1.5px] hover:bg-gray-950"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        >
          Delete
        </button>
        <button
          className="bg-black text-sm py-[3px] text-white h-fit px-[3px] hover:text-gray-400 rounded-sm border-gray-700 border-[1.5px] hover:bg-gray-950"
          onClick={() => {
            setOpenTask(!openTask);
          }}
        >
          Notes
        </button>
        {isNear && (
          <div className="flex gap-1 mt-[2px] ">
            <AiFillAlert className="text-red-600  text-xl" />{" "}
            <span>{nearValue}</span>
            {nearValue > 1 ? "days remaining" : "day remaining "}
          </div>
        )}
      </div>
      <div>{openTask && <OpenTodoComp todo={todo} />}</div>
    </div>
  );
}

export default TodoComponent;
