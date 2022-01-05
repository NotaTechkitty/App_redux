const addNewTaskApi = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(task), 2000);
  });
};

export { addNewTaskApi };
