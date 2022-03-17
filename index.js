"use strict";

const tasks = [
  { id: "1", text: "Buy milk", done: false, act: new Date() },
  { id: "2", text: "Pick up Tom from airport", done: false, act: new Date() },
  { id: "3", text: "Visit party", done: false, act: new Date() },
  { id: "4", text: "Visit doctor", done: true, act: new Date() },
  { id: "5", text: "Buy meat", done: true, act: new Date() },
];

const renderTasks = (tasksList) => {
  const sortTasks = tasksList.sort((a, b) => b.act - a.act);

  const tasksDone = sortTasks.filter((task) => task.done === true);
  const tasksNotDone = sortTasks.filter((task) => task.done === false);
  const tasksElems = [...tasksNotDone, ...tasksDone];

  const sortTaskElem = tasksElems.map(({ id, text, done }) => {
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

  const inputsElem = document.querySelectorAll(".list__item-checkbox");

  const handleInput = (event) => {
    const taskChecked = tasksList.filter(
      (task) => task.id === event.target.dataset.id
    );
    taskChecked[0].done = !taskChecked[0].done;
    taskChecked[0].act = new Date();

    renderTasks(tasksList);
  };

  for (let input of inputsElem) {
    input.addEventListener("click", handleInput);
  }
};

renderTasks(tasks);

const createTask = (tasksList) => {
  const input = document.querySelector(".task-input");
  const create = document.querySelector(".create-task-btn");

  const handleCreate = () => {
    if (input.value !== "") {
      tasks.push({
        id: String(tasks.length + 1),
        text: input.value,
        done: false,
        act: new Date(),
      });

      input.value = "";
    }

    renderTasks(tasksList);
  };

  create.addEventListener("click", handleCreate);
};

createTask(tasks);
