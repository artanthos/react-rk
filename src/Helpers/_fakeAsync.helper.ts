import {lsk} from 'src/Constants';
import taskCollection from 'src/Mocks/tasks.json';
import {localTime} from './_template.helper';

interface Task {
    id: number;
    title: string;
    description: string;
    createDate: string;
}

interface FakeLoginResponse {
    accessToken: string;
    refreshToken: string;
}

interface FakeAllTasksResponse {
    tasks: Task[];
}

interface FakeAddTaskPayload {
    title: string;
    description: string;
}

interface FakeDeleteTaskPayload {
    id: number;
}

interface FakeSearchForTaskByTitlePayload {
    title: string;
}

interface FakeGetTaskByIdPayload {
    id: number;
}

interface SortByDatePayload {
    isAsc: boolean;
    searchTerm: string;
}

type FakeAsyncType =
    | 'login'
    | 'register'
    | 'getAllTasks'
    | 'addTask'
    | 'deleteTask'
    | 'searchForTaskByTitle'
    | 'getTaskById'
    | 'sortAscByDate';

type FakeAsyncPayload =
    | FakeAddTaskPayload
    | FakeDeleteTaskPayload
    | FakeSearchForTaskByTitlePayload
    | FakeGetTaskByIdPayload
    | SortByDatePayload
    | undefined;

const fakeLogin: FakeLoginResponse = {
  accessToken: import.meta.env.VITE_JWT,
  refreshToken: import.meta.env.VITE_JWT_REFRESH,
};

const fakeAllTasks = (): FakeAllTasksResponse => {
  if (!localStorage.getItem(lsk.TASKS)) {
    localStorage.setItem(lsk.TASKS, JSON.stringify(taskCollection.tasks));
    return taskCollection;
  }

  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];
  return {tasks};
};

const fakeAddTask = (payload: FakeAddTaskPayload): Task[] => {
  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];
  const {title, description} = payload;
  const newTasks: Task[] = [
    ...tasks,
    {
      id: Number(tasks[tasks.length - 1].id) + 1,
      title,
      description,
      createDate: localTime,
    },
  ];
  localStorage.setItem(lsk.TASKS, JSON.stringify(newTasks));
  return newTasks;
};

const fakeDeleteTask = (payload: FakeDeleteTaskPayload): Task[] => {
  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];
  const {id} = payload;
  const newTasks = tasks.filter((task: Task) => task.id !== id);
  localStorage.setItem(lsk.TASKS, JSON.stringify(newTasks));
  return newTasks;
};

const fakeSearchForTaskByTitle = (payload: FakeSearchForTaskByTitlePayload): FakeAllTasksResponse => {
  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];
  const {title} = payload;
  return {tasks: tasks.filter((task: Task) => task.title.toLowerCase().includes(title.toLowerCase()))};
};

const fakeGetTaskById = (payload: FakeGetTaskByIdPayload): { task?: Task } => {
  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];
  const {id} = payload;
  return {task: tasks.find((task: Task) => task.id === id)};
};

const sortByDate = (payload: SortByDatePayload): FakeAllTasksResponse => {
  const storedTasks = localStorage.getItem(lsk.TASKS);
  const tasks = storedTasks ? JSON.parse(storedTasks) : [] as Task[];

  const {isAsc, searchTerm} = payload;

  const newTasks = tasks
    .filter((task: Task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a: Task, b: Task) => {
      const dateA = new Date(a.createDate);
      const dateB = new Date(b.createDate);

      if (isAsc) {
        return dateA.getTime() - dateB.getTime();
      }
      return dateB.getTime() - dateA.getTime();
    });
  return {tasks: newTasks};
};

const determine = ({asyncType, payload}: { asyncType: FakeAsyncType; payload: FakeAsyncPayload }) => {
  switch (asyncType) {
  case 'login':
  case 'register':
    return fakeLogin;
  case 'getAllTasks':
    return fakeAllTasks();
  case 'addTask':
    return fakeAddTask(payload as FakeAddTaskPayload);
  case 'deleteTask':
    return fakeDeleteTask(payload as FakeDeleteTaskPayload);
  case 'searchForTaskByTitle':
    return fakeSearchForTaskByTitle(payload as FakeSearchForTaskByTitlePayload);
  case 'getTaskById':
    return fakeGetTaskById(payload as FakeGetTaskByIdPayload);
  case 'sortAscByDate':
    return sortByDate(payload as SortByDatePayload);
  default:
    return null;
  }
};

const fakeAsync = ({asyncType, payload}: { asyncType: FakeAsyncType; payload: FakeAsyncPayload }) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(determine({asyncType, payload})), 100);
  });

export default fakeAsync;
