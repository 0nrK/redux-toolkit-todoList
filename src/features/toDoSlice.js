import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";


const initialState = []

const toDoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        add: (state,action) => {
            const newTodo = {
                id: v4(), 
                title: action.payload,
                completed: false,
                };
            state.push(newTodo)
        },
        remove: (state,action) => {
            return state.filter((todo) => todo.id !== action.payload)
        },
        toggleCompleted: (state,action) => {
            return state.map((todo) => (
                todo.id === action.payload)
                ? {...todo, completed: !todo.completed}
                : todo
                )
        },
        clearCompleted: (state) => {
            return state.filter(todo => !todo.completed )
        },
        markAllCompleted: (state) => {
            return state.map((todo) => ({...todo, completed:true}))
        }
    }
})

export const { add , remove, toggleCompleted, clearCompleted, markAllCompleted } = toDoSlice.actions

export default toDoSlice.reducer
