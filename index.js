"use strict";

const tasks = [
  { id: "1", text: "Buy milk", done: false },
  { id: "2", text: "Pick up Tom from airport", done: false },
  { id: "3", text: "Visit party", done: false },
  { id: "4", text: "Visit doctor", done: true },
  { id: "5", text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
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
  listElem.append(...tasksElems);

  const inputsElem = document.querySelectorAll(".list__item-checkbox");

  const handleInput = (event) => {
    const taskChecked = tasksList.filter(
      (task) => task.id === event.target.dataset.id
    );
    taskChecked[0].done = !taskChecked[0].done;

    renderTasks(tasksList);
  };

  for (let input of inputsElem) {
    input.addEventListener("click", handleInput);
  }
};

renderTasks(tasks);

const createTaskListener = (tasksList) => {
  const input = document.querySelector(".task-input");
  const create = document.querySelector(".create-task-btn");

  const handleCreate = () => {
    if (input.value !== "") {
      tasks.push({
        id: String(tasks.length + 1),
        text: input.value,
        done: false,
      });
      console.log(tasks);
      input.value = "";
    }

    renderTasks(tasksList);
  };

  create.addEventListener("click", handleCreate);
};

createTaskListener(tasks);
