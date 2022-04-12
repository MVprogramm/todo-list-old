import { renderTasks } from "../src/scripts/render.js";
import { initTodoListHandles } from "../src/scripts/todoList.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandles();
});

const onStorageChange = (event) => {
  if (event.key === "tasksList") {
    renderTasks();
  }
};

window.addEventListener("storage", onStorageChange);
