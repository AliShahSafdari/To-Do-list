import Selector from './selectors.js';

const ObjectSelec = new Selector();
export default class Todo {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

handleWindowLoad= () => {
  const data = this.todos;
  if (data.length > 0) {
    data.forEach((todo) => {
      this.renderTodo(todo);
    });
  }
}

renderTodo=(todo) => {
  const todoList = `<li data-id="${todo.id}" data-status="${todo.status}">
    <label for="${todo.id}">
    <input type="checkbox" id="${todo.id}" value="${todo.id}"
    ${todo.status === 'complete' ? 'chekced' : null}/>
    <input type="text" value="${todo.task}" readonly />
    </label>
        <div class="action">
        <button class="js-edit">
            <i class="ri-pencil-fill"></i>
        </button>
        <button class="js-delete">
            <i class="ri-delete-bin-fill"></i>
        </button>
        </div> 
    </li>`;
  ObjectSelec.todoBody.querySelector('.js-todo-list').innerHTML += todoList;
}

 hanleFormSubmit= () => {
   const todo = ObjectSelec.input.value;
   const myTodo = { id: Date.new, task: todo, status: 'pending' };
   this.todos.push(myTodo);
   localStorage.setItem('todos', JSON.stringify(this.todos));
   ObjectSelec.input.value = '';
   this.handleWindowLoad();
 }
}