import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
const initialState = {
    tasks:[
      {id:uuid.v1(),title:'title one ',checked:false},
      {id:uuid.v1(),title:'title two ',checked:true},
      {id:uuid.v1(),title:'title three ',checked:false},
      {id:uuid.v1(),title:'title four ',checked:false},
    ],   //id,title

  };

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask:(state,action)=>{
      state.tasks= state.tasks.map((task)=>{
        if(task.id==action.payload.id){
          return action.payload;
        }
        return task;
      })
      
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks= state.tasks.filter((task) => task.id !== taskId);
    },
    removeAllTask:()=>{
      return [];
    }
    // Other todo-related actions
  },
});

export const { addTask,updateTask, removeTask ,removeAllTask} = taskSlice.actions;

export default taskSlice.reducer;
