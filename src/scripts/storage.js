export const setItem = (task, key, value) => {
  task[key] = value;
};

export const getTasks = () => {
  let tasksList = JSON.parse(localStorage.getItem("tasksList"));

  if (!tasksList) {
    return [];
  }

  tasksList = tasksList.map((task) => {
    task.done = Boolean(task.done);
    task.act = new Date(task.act);

    return task;
  });

  return tasksList;
};

export const getTasksListLength = () => {
  const tasksList = getTasks();

  return tasksList.length;
};

export const addTask = (task) => {
  const tasksList = getTasks();

  tasksList.push(task);

  localStorage.setItem("tasksList", JSON.stringify(tasksList));
};
/*
export const changeTask = (updateTask) => {
  const updateTaskId = updateTask.id;
  const tasksList = getTasks();

  tasksList = tasksList.map((task) => {
    if (task.id === updateTaskId) {
      task.done = Boolean(task.done);
    task.act = new Date(task.act);
    }
  });

}
*/
