const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const list = document.createElement('li');
  list.id = newToDo.id;
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', handleDeleteToDoBtn);
  list.appendChild(span);
  list.appendChild(deleteBtn);
  toDoList.appendChild(list);
}

function handleDeleteToDoBtn(event) {
  const list = event.target.parentElement;
  list.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(list.id));
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((todo) => paintToDo(todo));
}
