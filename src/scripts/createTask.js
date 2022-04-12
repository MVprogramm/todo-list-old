import { renderTasks } from "./render.js";
import { setItem, getTasksListLength, addTask } from "./storage.js";

export const onCreateTask = () => {
  const input = document.querySelector(".task-input");

  if (input.value !== "") {
    const storage = {};

    setItem(storage, "id", String(getTasksListLength() + 1));
    setItem(storage, "text", input.value);
    setItem(storage, "done", false);
    setItem(storage, "act", new Date());

    addTask(storage);

    input.value = "";

    renderTasks();
  }
};
