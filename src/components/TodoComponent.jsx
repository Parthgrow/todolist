import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCheck } from "../features/todoSlice";
import OpenTodoComp from "./OpenTodoComp";
import { AiFillAlert } from "react-icons/ai";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#1A2027",
//   ...theme.typography.body2,
//   height: openTask ? "fit-content" : "40px",

//   color: theme.palette.text.secondary,
// }));

function TodoComponent({ todo }) {
  const [openTask, setOpenTask] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [nearValue, setNearValue] = useState(0);
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#1A2027",
    ...theme.typography.body2,
    height: openTask ? "fit-content" : "40px",

    color: theme.palette.text.secondary,
  }));

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
    <Item>
      <div className="flex flex-col gap-2 my-2 h-fit px-2 ">
        <div className={todo.checkbox ? "flex  my-2" : "flex"}>
          {/* <input
          type="checkbox"
          checked={todo.checkbox}
          onClick={() => {
            handleCheck(todo.id);
          }}
        /> */}

          <div className="flex gap-2 flex-1">
            <Checkbox
              className="relative bottom-2"
              sx={{ color: "blue" }}
              checked={todo.checkbox}
              onClick={() => {
                handleCheck(todo.id);
              }}
            />
            <p className="text-base text-gray-500"> {todo.text} </p>
            <p className="text-base text-gray-500"> {todo.date} </p>
          </div>

          <div className="flex  mx-2  ">
            {isNear && (
              <div className=" ">
                <AiFillAlert className="text-red-600  text-xl" />
              </div>
            )}

            <div className=" relative bottom-2 ">
              <IconButton
                aria-label="delete"
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
            <div className="relative bottom-2">
              <IconButton
                className=""
                onClick={() => {
                  setOpenTask(!openTask);
                }}
              >
                {openTask ? <ArrowCircleUpIcon /> : <ArrowCircleDownIcon />}
              </IconButton>
            </div>
          </div>
        </div>
        <div>{openTask && <OpenTodoComp todo={todo} />}</div>
      </div>
    </Item>
  );
}

export default TodoComponent;
