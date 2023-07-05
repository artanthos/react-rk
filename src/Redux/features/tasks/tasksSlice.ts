import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {localTime} from 'src/Helpers/_template.helper';

export interface Task {
    id: number;
    title: string;
    description: string;
    createDate: string;
}

export interface TasksState {
    list: {
        items: Task[];
        pagination: unknown; // Replace with the actual type for pagination if available
    };
}

const initialState: TasksState = {
  list: {
    items: [],
    pagination: {},
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const {id} = action.payload;
      const {items} = state.list;
      const newItems = items.filter((task) => task.id !== id);
      state.list.items = newItems;
    },
    addTask: (state, action: PayloadAction<{ title: string; description: string }>) => {
      const {title, description} = action.payload;
      const {items} = state.list;

      const newItems = [
        ...items,
        {
          id: items.length + 1,
          title,
          description,
          createDate: localTime,
        },
      ];
      state.list.items = newItems;
    },
    hydrateTasks: (state, action: PayloadAction<{ tasks: Task[] }>) => {
      const {tasks} = action.payload;
      state.list.items = tasks;
    },
  },
});

export const {deleteTask, addTask, hydrateTasks} = tasksSlice.actions;

export default tasksSlice.reducer;
