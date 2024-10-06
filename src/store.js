import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.js"


const store = configureStore({


    reducer : todoReducer


})

export default store ; 