import {configureStore, combineReducers, Reducer} from '@reduxjs/toolkit';
import authReducer, {AuthState} from 'src/Redux/features/auth/authSlice';
import tasksReducer, {TasksState} from 'src/Redux/features/tasks/tasksSlice';
import errorSliceReducer, {ErrorState} from 'src/Redux/features/errors/errorsSlice';
import {RESET_STATE_ACTION_TYPE} from 'src/Redux/actions';

interface RootState {
    auth: AuthState;
    tasks: TasksState;
    errorSlice: ErrorState;
}

const reducers: RootState = {
  auth: authReducer,
  tasks: tasksReducer,
  errorSlice: errorSliceReducer,
};

const combinedReducers: Reducer<RootState> = combineReducers(reducers);

const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = undefined;
  }

  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export {store};
