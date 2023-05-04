import './style.css';

const todoBody = document.querySelector('.js-todo-body');

const todos = [
  {
    id: 1,
    task: 'go shopping and buy new things',
    status: true,
  },
  {
    id: 2,
    task: 'read book',
    status: false,
  },
  {
    id: 3,
    task: 'start new job',
    status: true,
  },
  {
    id: 4,
    task: 'read news fast',
    status: false,
  },
];

const handleWindowLoad = () => {
  if (todos.length > 0) {
    todos.forEach((todo) => {
      const todoList = `<li data-id="${todo.id}" data-status="${todo.status}">
      <label for="${todo.id}">
      <input type="checkbox" id="${todo.id}" value="${todo.id}"
      ${todo.status === 'complete' ? 'true' : false}/>
      <input type="text" value="${todo.task}" readonly />
      </label>
          <div class="action">
          <button class="js-delete">
              <i class="ri-delete-bin-fill"></i>
          </button>
          </div> 
      </li>`;
      todoBody.querySelector('.js-todo-list').innerHTML += todoList;
    });
  }
};

handleWindowLoad();