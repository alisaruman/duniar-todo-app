import { createSlice } from "@reduxjs/toolkit";

export enum TaskStatus {
  blocked = "Blocked",
  todo = "ToDo",
  inprogress = "InProgress",
  inqa = "InQA",
  done = "Done",
  deployed = "Deployed",
}

export const statusTransitions: Record<TaskStatus, TaskStatus[]> = {
  [TaskStatus.blocked]: [TaskStatus.todo],
  [TaskStatus.todo]: [TaskStatus.blocked, TaskStatus.inprogress],
  [TaskStatus.inprogress]: [TaskStatus.todo, TaskStatus.inqa],
  [TaskStatus.inqa]: [TaskStatus.inprogress, TaskStatus.done],
  [TaskStatus.done]: [TaskStatus.deployed, TaskStatus.inqa],
  [TaskStatus.deployed]: [TaskStatus.done],
};
interface Task {
  id: number;
  status: TaskStatus;
  title: string;
  description: string;
}

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const { title, description } = action.payload;
      const lastTask = state[state.length - 1];
      const id = lastTask ? lastTask.id + 1 : 0;
      state.push({
        id,
        status: TaskStatus.todo, // Default status when adding a task
        title,
        description,
      });
    },
    editTask(state, action) {
      const { id, title, description, status } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
        task.status = status;
      }
    },
  },
});

export const taskActions = taskSlice.actions;
export type taskState = ReturnType<typeof taskSlice.reducer>;
export default taskSlice;
