import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number,
  title: string;
  description: string;
}

const initialState: Task[] =  [];


const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push({
        id: state.length,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    editTask(state, action) {
      state.forEach((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
        }
      });
    },
  },
});

export const taskActions = taskSlice.actions;
export type taskState = ReturnType<typeof taskSlice.reducer>;
export default taskSlice;
