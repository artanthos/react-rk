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

const appReducer: Reducer<RootState> = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  errorSlice: errorSliceReducer,
});

const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export {store};
