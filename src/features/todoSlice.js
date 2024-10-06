import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
 


const initialState = {

    todos : JSON.parse(localStorage.getItem('todos') || '[]')



}



const todoSlice  = createSlice({

    name : "todos",
    initialState, 

    reducers : {

        addTodo : (state,action)=>{


            state.todos.push(action.payload) ; 

    

            // if(state.todos === null || state.todos === [])
            // {
            //     const newTodos = [] ; 
            //     newTodos.push(todo) ; 

            //     state.todos = newTodos ; 
            // }
            // else
            // {
            //     state.todos.push(todo); 
            // }

            localStorage.setItem('todos',JSON.stringify(state.todos))

           



        },

        deleteTodo : (state,action)=>{

            state.todos = state.todos.filter((todo)=> todo.id !== action.payload); 
          localStorage.setItem('todos', JSON.stringify(state.todos))

        },

        updateCheck : (state,action)=>{

            // console.log("value of action payload")
            // console.log(action.payload)


            // console.log("state.todos before")

            // console.log(state.todos) ; 

           let todos = state.todos ; 

            for(let i = 0 ; i < todos.length ; i++)
            {
                if(todos[i].id === action.payload)
                {
                    
                    if(todos[i].checkbox)
                    {
                        todos[i].checkbox = false ; 
                    }
                    else
                    {
                        todos[i].checkbox = true ; 
                    }
                }
            }


            // state.todos = todos ; 

            // console.log("state.todos after")

            // console.log(state.todos)

            

            localStorage.setItem('todos', JSON.stringify(state.todos)); 

            // console.log("local storage value")

            // console.log(localStorage.getItem('todos')); 


            

            


        },

        updateNotes : (state,action)=>{

            const todo = action.payload ; 
            const id  = todo.id ; 
            const notes = todo.notes ; 

            let todos = state.todos ; 

            for(let i = 0 ; i < todos.length ; i++ )
            {
                if(todos[i].id === id)
                {
                    todos[i].notes = notes ; 
                }
            }

            state.todos = todos ; 
        }

    }
    })

export const {addTodo,deleteTodo,updateCheck,updateNotes} = todoSlice.actions ; 
export default todoSlice.reducer ; 
