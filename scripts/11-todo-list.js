const todoList = 
 [{
  name: 'Make Dinner',
  dueDate: '2023-07-20'
 },
  {name: 'Call Mom',
  dueDate: '2023-07-23'
}
];

function renderTodoList(){

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
    // const dueDate= todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `<p>${name} ${dueDate} <button
    onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
  "
  >
    Delete
  </button></p>`;
    todoListHTML += html;
  }
  
  document.querySelector('.js-print-todo').innerHTML = todoListHTML;
  
}

renderTodoList();



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });

 

  inputElement.value = '';

  renderTodoList();
 
}


