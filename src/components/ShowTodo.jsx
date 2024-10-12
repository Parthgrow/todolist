import React, { useState } from "react";
import { useSelector } from "react-redux";

import TodoComponent from "./TodoComponent";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  height: "fit-content",

  color: theme.palette.text.secondary,
}));

function ShowTodo() {
  const todos = useSelector((state) => state.todos);

  const checkTodos = todos.filter((todo) => todo.checkbox !== false);
  const uncheckTodos = todos.filter((todo) => todo.checkbox === false);

  return (
    <>
      <div className="p-2 mx-2">
        <div className="">
          <Stack spacing={1}>
            {uncheckTodos.map((todo) => {
              return (
                // <Item key={todo.id} className="h-fit">

                // </Item>
                <TodoComponent key={todo.id} todo={todo} />
              );
            })}
          </Stack>
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
