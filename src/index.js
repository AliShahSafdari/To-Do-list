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
