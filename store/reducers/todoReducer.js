import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks:[
      {id:1,title:'title one '}
    ],   //id,title

  };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    // Other todo-related actions
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
