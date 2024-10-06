import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotes } from "../features/todoSlice";

function OpenTodoComp({ todo }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
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
      <div className="border-2 border-black bg-gray-400 h-fit text-sm text-white">
        <div>
          {!isEdit ? (
            <div>{todo.notes}</div>
          ) : (
            <div>
              <textarea
                name=""
                id=""
                className="text-black w-full cursor-text h-20"
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              ></textarea>
            </div>
          )}
        </div>
        <button
          className="bg-black text-white px-2 py-1 rounded-sm m-1"
          onClick={handleEdit}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        {/* <p>{isEdit.toString()}</p>
        <p>{text}</p> */}
      </div>
    </>
  );
}

export default OpenTodoComp;
