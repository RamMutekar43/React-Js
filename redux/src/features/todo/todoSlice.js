import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1, text:'hello'}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            if(state.todos.id === action.payload){
                state.todos.text = action.payload
            }
            return;
        }
    }
})

export const  {addTodo, removeTodo,updateTodo} =todoSlice.actions