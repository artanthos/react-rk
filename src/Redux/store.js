import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from 'Redux/features/auth/authSlice';
import tasksReducer from 'Redux/features/tasks/tasksSlice';
import errorSliceReducer from 'Redux/features/errors/errorsSlice';
import { RESET_STATE_ACTION_TYPE } from 'Redux/actions';

const reducers = {
  auth: authReducer,
  tasks: tasksReducer,
  errorSlice: errorSliceReducer,
};

const combinedReducers = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {};
  }

  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
