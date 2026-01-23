// ================= HANDLE THEME TOGGLE ================= //
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const toggleThemeBtnIcon = document.getElementById("toggle-theme-btn-icon");
const backgroundImage = document.getElementById("background-image");
const backgroundImageMobile = document.getElementById(
  "background-image-mobile",
);

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  toggleThemeBtnIcon.src = document.documentElement.classList.contains("light")
    ? "./images/icon-moon.svg"
    : "./images/icon-sun.svg";

  backgroundImage.src = document.documentElement.classList.contains("light")
    ? "./images/bg-desktop-light.jpg"
    : "./images/bg-desktop-dark.jpg";

  backgroundImageMobile.setAttribute(
    "srcset",
    document.documentElement.classList.contains("light")
      ? "./images/bg-mobile-light.jpg"
      : "./images/bg-mobile-dark.jpg",
  );
});

// ================= HANDLE TODO INPUT ================= //
let todosArray = localStorage.getItem("todosArray")
  ? JSON.parse(localStorage.getItem("todosArray"))
  : [];
const addButton = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");

function addNewTodo(value) {
  if (value === "") return;
  todosArray.push({ id: Date.now(), todo: value, completed: false });
  renderTodos(todosArray);
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addNewTodo(todoInput.value);
    showTodosLeft();
    todoInput.value = "";
  }
});

addButton.addEventListener("click", () => {
  addNewTodo(todoInput.value);
  showTodosLeft();
  todoInput.value = "";
});

// ================= SHOW TODOS LEFT ================= //
const todosLeftElement = document.getElementById("todos-left");
function showTodosLeft() {
  todosLeftElement.innerHTML =
    todosArray.filter((todo) => todo.completed === false).length +
    " items left";
}
showTodosLeft();

// ================= RENDER TODOS ================= //
const todosList = document.getElementById("todos-list");

function renderTodos(todos) {
  todosList.innerHTML = "";
  todos.map((todo) => {
    let isTodoCompleted = todo.completed;
    // create li
    const li = document.createElement("li");
    li.classList.add("app__todo");
    if (isTodoCompleted) li.classList.add("app__todo--completed");

    // create check button
    const checkButton = document.createElement("button");
    checkButton.classList.add("app__check-btn");

    checkButton.addEventListener("click", () => {
      toggleTodoStatus(todo.id);
    });

    const checkImg = document.createElement("img");
    checkImg.classList.add("app__check-icon");
    checkImg.src = "./images/icon-check.svg";
    checkImg.alt = "check icon";

    checkButton.appendChild(checkImg);

    // create span
    const span = document.createElement("span");
    span.innerHTML = todo.todo;

    // create remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add("app__remove-btn");
    removeButton.addEventListener("click", () => {
      removeTodo(todo.id);
    });
    const crossImg = document.createElement("img");
    crossImg.src = "./images/icon-cross.svg";
    crossImg.alt = "cross icon";

    removeButton.appendChild(crossImg);

    // append elements to li
    li.appendChild(checkButton);
    li.appendChild(span);
    li.appendChild(removeButton);

    todosList.appendChild(li);
  });
}
renderTodos(todosArray);

// ================= MARK TODO ================= //
function toggleTodoStatus(id) {
  // get the index of todo that has the same id
  let todoIndex = todosArray.findIndex((todo) => todo.id === id);

  // give the todo elemetn app__todo--completed class
  let todoElement = document.querySelectorAll(".app__todo")[todoIndex];
  todoElement.classList.toggle("app__todo--completed");

  // get the todo item
  let todoItem = todosArray[todoIndex];
  todoItem = { ...todoItem, completed: !todoItem.completed };
  // replace the old todo item with the new one
  todosArray.splice(todoIndex, 1, todoItem);
  showTodosLeft();
  // update localStorage
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}

// ================= REMOVE TODO ================= //
function removeTodo(id) {
  // get the index of todo that has the same id
  let todoIndex = todosArray.findIndex((todo) => todo.id === id);
  // remov todo element from document
  document.querySelectorAll(".app__todo")[todoIndex].remove();

  // remove todo item from todosArray & update localStorage
  todosArray.splice(todoIndex, 1);
  showTodosLeft();
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
}

// ================= SHOW ALL TODOS ================= //
const showAllTodosBtn = document.getElementById("show-all-btn");

function showAllTodos() {
  renderTodos(todosArray);
}

showAllTodosBtn.addEventListener("click", () => {
  showAllTodos();
  document
    .querySelectorAll(".app__controls .app__button")
    .forEach((btn) => btn.classList.remove("app__button--active"));
  showAllTodosBtn.classList.add("app__button--active");
});

// ================= SHOW ACTIVE TODOS ================= //
const showActiveBtn = document.getElementById("show-active-btn");

function showActiveTodos() {
  // filter the todosArray from todos that is n't completed
  const notCompletedTodos = todosArray.filter((todo) => !todo.completed);
  renderTodos(notCompletedTodos);
}

showActiveBtn.addEventListener("click", () => {
  showActiveTodos();
  document
    .querySelectorAll(".app__controls .app__button")
    .forEach((btn) => btn.classList.remove("app__button--active"));
  showActiveBtn.classList.add("app__button--active");
});

// ================= SHOW COMPLETED TODOS ================= //
const showCompletedBtn = document.getElementById("show-completed-btn");

function showCompletedTodos() {
  // filter the todosArray from todos that is completed
  const todosCompleted = todosArray.filter((todo) => todo.completed);
  renderTodos(todosCompleted);
}

showCompletedBtn.addEventListener("click", () => {
  showCompletedTodos();
  document
    .querySelectorAll(".app__controls .app__button")
    .forEach((btn) => btn.classList.remove("app__button--active"));
  showCompletedBtn.classList.add("app__button--active");
});

// ================= CLEAR ALL TODOS ================= //
const clearCompletedBtn = document.getElementById("clear-completed");

clearCompletedBtn.addEventListener("click", () => {
  clearCompletedTodos();
});

function clearCompletedTodos() {
  const notCompletedTodos = todosArray.filter((todo) => !todo.completed);
  todosArray = notCompletedTodos;
  renderTodos(todosArray);
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
  // if user clicked on completed or active button
  // then he clicked on clear completed button
  // the clear completed button should show the todos left or in another meaning it should show all the todos left
  // so add a appp__button--active on showAllTodosBtn
  document
    .querySelectorAll(".app__controls .app__button")
    .forEach((btn) => btn.classList.remove("app__button--active"));
  showAllTodosBtn.classList.add("app__button--active");
}
