import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/toDoSlice"

export const store = configureStore({
    reducer: todosReducer
});
  