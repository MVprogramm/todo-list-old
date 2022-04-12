import { getTasks } from "./storage.js";
import { renderTasks } from "./render.js";

export const onToggleTask = (event) => {
  let tasksList = getTasks();
  const updateTaskId = event.target.firstChild.dataset.id;

  tasksList = tasksList.map((task) => {
    if (task.id === updateTaskId) {
      task.done = !task.done;
      task.act = new Date();
    }

    return task;
  });

  localStorage.setItem("tasksList", JSON.stringify(tasksList));

  renderTasks();
};
