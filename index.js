"use strict";

/*
 * array with task objects to be done
 *  @task object:
 *    @id - identifier,
 *    @text - task description,
 *    @done - decided(true) / not decided(false)
 */
const tasks = [
  { id: "1", text: "Buy milk", done: false },
  { id: "2", text: "Pick up Tom from airport", done: true },
  { id: "3", text: "Visit party", done: false },
  { id: "4", text: "Visit doctor", done: false },
  { id: "5", text: "Buy meat", done: true },
];

/*
 * @param {object[]} tasksList
 * @return {link to DOM-Element} <ul class="list"></ul>
 * @doing:
 *  - sort the objects: completed tasks at the end,
 *  - create HTML markup for a task list: solved and
 *    unsolved tasks have different CSS properties,
 *  - get a reference to the DOM element for the add code,
 *  - add code to DOM
 */
const renderTasks = () => {
  const tasksList = tasks
    .sort((a, b) => a.done - b.done)
    .map((task) => {
      let li = document.createElement("li");
      if (task.done) {
        li.innerHTML = `<input data-id="${task.id}" type="checkbox" class="list__item-checkbox" checked />
      ${task.text}`;
        li.className = "list__item list__item_done";
      } else {
        li.innerHTML = `<input data-id="${task.id}" type="checkbox" class="list__item-checkbox" />
      ${task.text}`;
        li.className = "list__item";
      }
      return li;
    });

  const tasksElem = document.querySelector(".list");
  tasksElem.innerHTML = "";
  tasksElem.append(...tasksList);

  return tasksElem;
};

/*
 * @param {link to DOM-Element} <ul class="list"></ul>
 * @return undefined
 * @doing:
 *  - get click on checkboxes in task list,
 *  - set which tasks are clicked,
 *  - find these tasks in array,
 *  - change tasks according to user action
 *  - render the new task list
 */
const listListener = (elem) => {
  const handleList = (event) => {
    const taskChecked = tasks.filter(
      (task) => task.id === event.target.dataset.id
    );
    taskChecked[0].done = !taskChecked[0].done;

    renderTasks();
  };

  elem.addEventListener("input", handleList);
};

/*
 * @param {none}
 * @return undefined
 * @doing:
 *  - get references to input and button DOM elements,
 *  - get click on the "create" button,
 *  - check if the input field is empty,
 *  - add validated task to array,
 *  - render the new task list
 */
const createTaskListener = () => {
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

    renderTasks();
  };

  create.addEventListener("click", handleCreate);
};

/*
 * @algorithm:
 *  - create list of tasks in DOM element,
 *  - run an event handler on the task list,
 *  - run an event handler on the create task button
 */
const listElem = renderTasks();
listListener(listElem);
createTaskListener();
