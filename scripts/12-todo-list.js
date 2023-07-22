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

  todoList.forEach(function(todoObject, index){
    
     const {name, dueDate} = todoObject;
     const html = `<div class="js-todo-item">
     <div>${name}</div>
     <div>${dueDate}</div>
     <button class = "btn-delete" onclick="todoList.splice(${index}, 1);
     renderTodoList();">Delete</button>
     </div>`;
 
     
     todoListHTML += html;

  });
  /* for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
    // const dueDate= todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `<div class="js-todo-item">
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "btn-delete" onclick="todoList.splice(${i}, 1);
    renderTodoList();">Delete</button>
    </div>`;

    
    todoListHTML += html;
  }*/
  
  document.querySelector('.js-print-todo').innerHTML = todoListHTML;
  
}

renderTodoList();



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  console.log(inputElement); // Check if the element is correctly selected
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input');
  console.log(dateInputElement); // Check if the element is correctly selected
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });


  inputElement.value = '';
  renderTodoList();
 
}





