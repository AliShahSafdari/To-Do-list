import './style.css';
import Selector from '../modules/selectors.js';
import Todo from '../modules/todo.js';

const objectSelector = new Selector();
const objectTodo = new Todo();

window.addEventListener('load', () => {
  objectTodo.handleWindowLoad();
});
objectSelector.todoForm.addEventListener('submit', () => {
  objectTodo.hanleFormSubmit();
});
