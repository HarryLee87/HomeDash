const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

function paintToDo(newToDo) {
  const list = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newToDo;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', handleDeleteToDoBtn);
  list.appendChild(span);
  list.appendChild(deleteBtn);
  toDoList.appendChild(list);
}

function handleDeleteToDoBtn(event) {
  event.target.parentElement.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
