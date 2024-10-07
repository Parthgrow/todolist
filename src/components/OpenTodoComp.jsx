import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../features/todoSlice";

function OpenTodoComp({ todo }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [date, setDate] = useState(todo.date);
  const [text, setText] = useState("");

  const handleEdit = () => {
    const action = {
      id: todo.id,
      notes: text,
    };
    dispatch(updateNotes(action));
    setIsEdit(!isEdit);
  };
  return (
    <>
      <div className="border-[1px] border-gray-600 p-2 shadow-lg opacity-55  h-fit text-sm text-black ">
        <div>
          {!isEdit ? (
            <div className="p-2 text-white">{todo.notes}</div>
          ) : (
            <div className="mb-2 ">
              <textarea
                name=""
                id=""
                className=" bg-gray-500/30 rounded-sm w-full cursor-text text-white  p-2"
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
          <button
            className="text-white px-1 h-[30px]  bg-gray-900 rounded-sm mx-2"
            onClick={handleEdit}
          >
            {isEdit ? "Save" : "Edit"}
          </button>
          {isEdit && (
            <button
              onClick={() => {
                setIsEdit(false);
              }}
              className="text-white px-1 h-[30px] mx-2  bg-gray-900 rounded-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default OpenTodoComp;
