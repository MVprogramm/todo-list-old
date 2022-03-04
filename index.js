"use strict";

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const tasksElem = document.querySelector(".list");

  const tasks = tasksList.map((task) => {
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="list__item-checkbox" />
    ${task.text}`;
    task.done
      ? (li.className = "list__item list__item_done")
      : (li.className = "list__item");

    return li;
  });

  tasksElem.append(...tasks);
};

renderTasks(tasks);
