import { lsk } from 'Constants';
import taskCollection from 'Mocks/tasks.json';
import { localTime } from './_template.helper';

const fakeLogin = {
  accessToken: process.env.REACT_APP_JWT,
  refreshToken: process.env.REACT_APP_JWT_REFRESH,
};

const fakeAllTasks = () => {
  if (!localStorage.getItem(lsk.TASKS)) {
    localStorage.setItem(lsk.TASKS, JSON.stringify(taskCollection.tasks));
    return taskCollection;
  }

  return { tasks: JSON.parse(localStorage.getItem(lsk.TASKS)) };
};

const fakeAddTask = (payload) => {
  const tasks = JSON.parse(localStorage.getItem(lsk.TASKS));
  const { title, description } = payload;
  const newTasks = [
    ...tasks,
    {
      id: tasks.length + 1,
      title,
      description,
      createDate: localTime,
    },
  ];
  localStorage.setItem(lsk.TASKS, JSON.stringify(newTasks));
  return newTasks;
};

const fakeDeleteTask = (payload) => {
  const tasks = JSON.parse(localStorage.getItem(lsk.TASKS));
  const { id } = payload;
  const newTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem(lsk.TASKS, JSON.stringify(newTasks));
  return newTasks;
};

const fakeSearchForTaskByTitle = (payload) => {
  const tasks = JSON.parse(localStorage.getItem(lsk.TASKS));
  const { title } = payload;
  return { tasks: tasks.filter((task) => task.title.toLowerCase().includes(title.toLowerCase())) };
};

const fakeGetTaskById = (payload) => {
  const tasks = JSON.parse(localStorage.getItem(lsk.TASKS));
  const { id } = payload;
  return { task: tasks.find((task) => task.id === id) };
};

const sortByDate = (payload) => {
  const tasks = JSON.parse(localStorage.getItem(lsk.TASKS));

  const { isAsc, searchTerm } = payload;

  const newTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.createDate);
      const dateB = new Date(b.createDate);

      if (isAsc) {
        return dateA - dateB;
      }
      return dateB - dateA;
    });
  return { tasks: newTasks };
};

const determine = ({ asyncType, payload }) => {
  switch (asyncType) {
  case 'login':
  case 'register':
    return fakeLogin;
  case 'getAllTasks':
    return fakeAllTasks();
  case 'addTask':
    return fakeAddTask(payload);
  case 'deleteTask':
    return fakeDeleteTask(payload);
  case 'searchForTaskByTitle':
    return fakeSearchForTaskByTitle(payload);
  case 'getTaskById':
    return fakeGetTaskById(payload);
  case 'sortAscByDate':
    return sortByDate(payload);
  default:
    return null;
  }
};

const fakeAsync = ({ asyncType, payload }) => new Promise((resolve) => {
  setTimeout(resolve(determine({ asyncType, payload })), 3000);
});
export default fakeAsync;

