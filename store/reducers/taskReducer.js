import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
const initialState = {
  tasks: [
    { id: uuid.v1(), title: "User Research & Analysis", checked: false },
    { id: uuid.v1(), title: "Black & White Wireframe", checked: false },
    { id: uuid.v1(), title: "Design On Figma", checked: true },
  ], //id,title,checked
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const taskId = action.payload.id;
      const updatedTask = state.tasks.map((task) => {
        if (task.id == taskId) {
          return action.payload;
        }
        return task;
      });
      // updatedTask.sort((taskA, taskB) => {
      //   if (taskA.checked && !taskB.checked) {
      //     return 1; // taskA comes after taskB
      //   } else if (!taskA.checked && taskB.checked) {
      //     return -1; // taskA comes before taskB
      //   } else {
      //     return 0; // no change in order
      //   }
      // });
      state.tasks = updatedTask;
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    removeAllTask: (state) => {
      state.tasks = [];
    },
    // Other todo-related actions
  },
});

export const { addTask, updateTask, removeTask, removeAllTask } =
  taskSlice.actions;

export default taskSlice.reducer;
