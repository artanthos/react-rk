import { createSlice } from '@reduxjs/toolkit';
import { localTime } from 'src/Helpers/_template.helper';

const initialState = {
  list: {
    items: [],
    pagination: {},
  },
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    deleteTask: (state, action) => {
      const { id } = action.payload;
      const { items } = state.list;
      const newItems = items.filter((task) => task.id !== id);
      state.list.items = newItems;
    },
    addTask: (state, action) => {
      const { title, description } = action.payload;
      const { items } = state.list;

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
    hydrateTasks: (state, action) => {
      const { tasks } = action.payload;
      state.list.items = tasks;
    },
  },
});

export const { deleteTask, addTask, hydrateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
