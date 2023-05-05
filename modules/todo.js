import { parseInt } from 'lodash';
import Selector from './selectors.js';
import checkStatus from './statusCheck.js';

const ObjectSelec = new Selector();
export default class Todo {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  visable = () => {
    if (this.todos.length === 0) {
      ObjectSelec.clear.classList.add('display');
    } else {
      ObjectSelec.clear.classList.remove('display');
    }
  }

  dispaly = () => {
    ObjectSelec.todoBody.querySelector('.js-todo-list').innerHTML = '';
    this.todos.forEach((todo) => {
      const todoList = `<li data-id="${todo.id}" data-status="${todo.status}">
      <label for="${todo.id}">
      <input type="checkbox" class="check" id="${todo.id}" value="${todo.id}"
      ${todo.status === 'completed'}/>
      <input type="text" class="js-edit-input" value="${todo.task}"/>
      </label>
          <div class="action">
          <button class="js-delete">
              <i class="ri-delete-bin-fill"></i>
          </button>
          </div> 
      </li>`;
      ObjectSelec.todoBody.querySelector('.js-todo-list').innerHTML += todoList;
    });
    this.visable();
  }

  addTask = (e) => {
    e.preventDefault();
    const todo = ObjectSelec.input.value;
    if (!todo) return;
    if (this.todos.length === 0) {
      const myTodo = { id: 1, task: todo, status: false };
      this.todos.push(myTodo);
    } else {
      const index = this.todos.length + 1;
      const myTodo = { id: index, task: todo, status: false };
      this.todos.push(myTodo);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    ObjectSelec.input.value = '';
    this.dispaly();
  }

  deletTask = async (e) => {
    const btndelete = e.target.closest('.js-delete');
    if (!btndelete) return;
    const { id } = btndelete.closest('li').dataset;
    this.todos = this.todos.filter((todo) => parseInt(todo.id) !== parseInt(id));
    this.todos.forEach((todo, id) => {
      todo.id = id + 1;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.dispaly();
    btndelete.closest('li').remove();
    this.visable();
  }

  editTedxt = (id, e) => {
    const { value } = e.target;
    const index = this.todos.findIndex((todo) => parseInt(todo.id, 10) === parseInt(id, 10));
    this.todos[index].task = value;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateText = (e) => {
    const inputEdit = e.target.closest('.js-edit-input');
    const { id } = inputEdit.closest('li').dataset;
    const exactInput = inputEdit.closest('li').querySelector('input[type="text"]');
    exactInput.addEventListener('keyup', this.editTedxt.bind(e, id));
  }

  checkStatus = (e) => {
    checkStatus(e, this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  handleFormAction(e) {
    const inputEdit = e.target.closest('.js-edit-input');
    if (inputEdit) {
      this.updateText(e);
    }
    this.deletTask(e);
    this.checkStatus(e);
  }
}
