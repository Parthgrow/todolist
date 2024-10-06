import React, { useState } from "react";
import { useSelector } from "react-redux";

import TodoComponent from "./TodoComponent";

function ShowTodo() {
  const todos = useSelector((state) => state.todos);

  const checkTodos = todos.filter((todo) => todo.checkbox !== false);
  const uncheckTodos = todos.filter((todo) => todo.checkbox === false);

  return (
    <>
      <div className="p-2 mx-2">
        <div className="">
          {uncheckTodos.map((todo) => {
            return <TodoComponent key={todo.id} todo={todo} />;
          })}
        </div>
        <div className="">
          {checkTodos.map((todo) => {
            return <TodoComponent key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ShowTodo;
