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
      for(let i=0; i<todos.length; i++){
   // todos.forEach((todo) => { had to remove this as it wasn't setting event listeners for all delete and checkbox ..but its still isn't
      const todoList = `<li data-id="${todos[i].id}" data-status="${todos[i].status}">
      <label>
      <input type="checkbox" id="${todos[i].id}" value="${todos[i].id}"
      ${todos[i].status === 'complete' ? 'true' : false}/>
      <input type="text" value="${todos[i].task}" readonly />
      </label>

      <div class="action">
        <button class="js-delete"  id="trash-${todos[i].id}">
          <i class="ri-delete-bin-fill"></i>
        </button>
      </div> 
      
      </li>`;
      todoBody.querySelector('.js-todo-list').innerHTML += todoList;
      // add evemt listener on the checkbox and delete 
      const li = todoBody.firstElementChild.children[i];
      const deleteElement = li.lastElementChild.firstElementChild;
      const checkboxElement = li.firstElementChild.firstElementChild;
      deleteElement.addEventListener('click', ()=>{
        alert('Just clicked delete no - '+ todos[i].id)
      })
      checkboxElement.addEventListener('change', (e)=>{
        alert('Just checked checkmark  number - ' +todos[i].id+ '  -'+ e.target.checked )
      })
 
      console.log('li- ',li, deleteElement, checkboxElement);
  //  });
     }   
  }
  else{
    todoBody.querySelector('.js-todo-list').innerHTML = `<p> list is empty </p>`;
  }
};

handleWindowLoad();