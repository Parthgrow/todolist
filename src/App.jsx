import { useState } from "react";

import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoComponent from "./components/TodoComponent";
import { useSelector } from "react-redux";
import ShowTodo from "./components/ShowTodo";

function App() {
  let todos = useSelector((state) => state.todos);
  // localStorage.removeItem("todos");
  // console.log(localStorage.getItem("todos"));

  return (
    <>
      <div className="py-40 ">
        <div className="flex gap-20 justify-center">
          <div className="">
            <h1 className="my-3 p-2 text-center text-3xl">Todos</h1>
            <AddToDo />
            <ShowTodo />
          </div>
          {/* <div className="border-2 border-black">
            <h1 className="text-2xl">Debugging Section</h1>
          </div> */}
        </div>

        <div>{todos ? JSON.stringify(todos) : "It's null"}</div>
      </div>
    </>
  );
}

export default App;
