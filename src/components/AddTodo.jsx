import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import Button from "@mui/material/Button";
import { nanoid } from "nanoid";
import TextField from "@mui/material/TextField";

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
    <div className="flex gap-5 mx-2  rounded-sm  px-[10px] my-3 ">
      <div className="flex flex-col gap-2 ">
        {/* <input
          type="text"
          placeholder="Add to do"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="px-2 mt-4 bg-black border-none"
        /> */}

        <div className="">
          <TextField
            id="standard-basic"
            label="Add To Do"
            variant="standard"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            InputProps={{
              style: { color: "white" }, // Input text color
            }}
            InputLabelProps={{
              style: { color: "white" }, // Label color
            }}
            sx={{
              "& .MuiInput-underline:before": {
                borderBottomColor: "rgba(0, 0, 255, 0.5)", // Default underline color
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "blue", // Underline color on hover
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "blue", // Underline color when focused
              },
            }}
          />
        </div>

        <p>
          {flag && (
            <div className="text-red-600 font-bold">
              Please enter a valid to-do
            </div>
          )}
        </p>
      </div>

      {/* <input
        type="date"
        min={today}
        value={date}
        onChange={handleDate}
        className="text-white px-1 h-[30px] my-3 bg-gray-900 rounded-sm"
      /> */}

      <TextField
        type="date"
        className="relative top-2"
        min={today}
        value={date}
        onChange={handleDate}
        sx={{
          "& .MuiInputBase-input": {
            color: "white", // Input text color
            padding: "6px 10px",
          },
          "& .MuiInputLabel-root": {
            color: "white", // Label color
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 255, 0.5)", // Outline color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue", // Outline color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "blue", // Outline color when focused
          },
        }}
      />

      <Button
        variant="outlined"
        className="h-fit px-[5px] py-[5px] "
        onClick={handleAddtodo}
        sx={{ mt: 1 }}
      >
        Add to do
      </Button>

      <Button
        variant="outlined"
        className="h-fit px-[5px] py-[5px]"
        sx={{ mt: 1 }}
        onClick={handleReset}
      >
        Reset
      </Button>
    </div>
  );
}

export default AddToDo;
