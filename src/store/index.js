import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/toDoSlice"
//store
export const store = configureStore({
    reducer: todosReducer
});
  