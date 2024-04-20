// todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  toggleForm: true,
  todoUpdate: {},
  // Add a new field to store contact form data
  contactFormData: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    formToggled: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToUpdate.title = action.payload.title;
      state.toggleForm = !state.toggleForm;
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todosCleared: (state) => {
      state.todos = [];
    },
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    // Define a new action to handle sending contact form data
    sendContactForm: (state, action) => {
      state.contactFormData = action.payload;
    },
  },
});

export const {
  formToggled,
  todoDeleted,
  todosCleared,
  todoAdded,
  todoUpdated,
  sendContactForm, // Include the new action in exports
} = todoSlice.actions;

export default todoSlice.reducer;