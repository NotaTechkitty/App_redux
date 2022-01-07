const addNewTaskApi = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(task), 2000);
  });
};

const getTaskApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000);
  });
};

export { addNewTaskApi, getTaskApi };
