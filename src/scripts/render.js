import { getTasks } from "./storage.js";

export const renderTasks = () => {
  if (getTasks()) {
    const tasksSort = getTasks().sort((a, b) => b.act - a.act);
    const tasksDone = tasksSort.filter((task) => task.done === true);
    const tasksNotDone = tasksSort.filter((task) => task.done === false);
    const tasksElem = [...tasksNotDone, ...tasksDone];

    const sortTaskElem = tasksElem.map(({ id, text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");

      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

    const listElem = document.querySelector(".list");

    listElem.innerHTML = "";
    listElem.append(...sortTaskElem);
  }
};
