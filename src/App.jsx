import AddTodo from "./components/AddTodo";
import { useSelector } from "react-redux";
import ShowTodo from "./components/ShowTodo";

function App() {
  let todos = useSelector((state) => state.todos);
  // localStorage.removeItem("todos");
  // console.log(localStorage.getItem("todos"));

  return (
    <>
      <div className="min-h-screen bg-black py-20 ">
        <div className="flex gap-20  items-center justify-center ">
          <div className="bg-gray-800/5 rounded-md text-white">
            <AddTodo />
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
