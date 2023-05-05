import './style.css';
import Selector from '../modules/selectors.js';
import Todo from '../modules/todo.js';

const objectSelector = new Selector();
const objectTodo = new Todo();

window.addEventListener('load', () => {
  objectTodo.dispaly();
});
objectSelector.todoForm.addEventListener('submit', (e) => {
  objectTodo.addTask(e);
});

objectSelector.todoBody.addEventListener('click', (e) => {
  objectTodo.handleFormAction(e);
});

objectSelector.clear.addEventListener('click', () => {
  objectTodo.todos = objectTodo.todos.filter((todo) => todo.status !== true);
  objectTodo.todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  localStorage.setItem('todos', JSON.stringify(objectTodo.todos));
  objectTodo.dispaly();
});
