import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../features/todoSlice";
import Button from "@mui/material/Button";

function OpenTodoComp({ todo }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [date, setDate] = useState(todo.date);
  const [text, setText] = useState(todo.notes);

  const handleEdit = () => {
    const action = {
      id: todo.id,
      notes: text,
    };
    dispatch(updateNotes(action));
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };
  return (
    <>
      <div className="border-[1px] border-gray-600 p-2 shadow-lg opacity-55  h-fit text-sm text-black ">
        <div>
          {!isEdit ? (
            <div className="p-2 text-white">{todo.notes}</div>
          ) : (
            <div className="mb-2  ">
              <textarea
                name=""
                id=""
                className=" bg-black rounded-sm w-full cursor-text text-white  p-2"
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              />
            </div>
          )}
        </div>
        <div className="flex ">
          {isEdit && (
            <div>
              <span className="text-white mx-1">Date :</span>
              <input
                type="date"
                name=""
                id=""
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                }}
                className="text-white px-1 h-[30px]  bg-gray-900 rounded-sm"
              />
            </div>
          )}

          <Button
            sx={{
              color: "white",
              px: 1,
              height: "30px",
              backgroundColor: "black",
              borderRadius: "2px",
              mx: 1,
              "&:hover": {
                backgroundColor: "orange", // Optional hover color
              },
            }}
            onClick={handleEdit}
          >
            {isEdit ? "Save" : "Edit"}
          </Button>
          {isEdit && (
            <Button
              sx={{
                color: "white",
                px: 1,
                height: "30px",
                backgroundColor: "black",
                borderRadius: "2px",
                mx: 1,
                "&:hover": {
                  backgroundColor: "orange", // Optional hover color
                },
              }}
              onClick={handleEdit}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default OpenTodoComp;
