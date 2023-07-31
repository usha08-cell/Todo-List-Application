

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");
let saveTodoButton=document.getElementById("saveTodoButton");





//creating list of todo items
let todoList=[
     {
         text:"Learn HTML",
         uniqueNo:1
     },
     {
         text:"Learn CSS",
         uniqueNo:2
     },
     {
         text:"Learn Javascript",
         uniqueNo:3
     },
     {
         text:"Learn Bootstrap",
         uniqueNo:4
     },
     {
         text:"Learn React.js",
         uniqueNo:5
     }
];

saveTodoButton.onclick=function() {
  localStorage.setItem("todoList"), JSON.stringify(todoList);
}



addTodoButton.onclick= function() {
  onAddTodo();
}



function onDeleteTodo(todoId) {
  let todoElement=document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function onTodoStatusChange(checkboxId,labelId) {
    let checkboxElement=document.getElementById(checkboxId);
    console.log(checkboxElement.checked);

    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle("checked");
} 


function CreateAndAppendTodo(todo) {
    let checkboxId="checkbox"+ todo.uniqueNo;
    let labelId="label"+todo.uniqueNo;
    let todoId="todo"+todo.uniqueNo;



  let todoElement = document.createElement("li");
  todoElement.id=todoId;
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row"); // Fix the class name to "todo-item-container"
  todoItemsContainer.appendChild(todoElement);
  console.log(todoItemsContainer);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick= function() {
    onTodoStatusChange(checkboxId,labelId);
  };
  todoElement.appendChild(inputElement);



  //creating a label container
  let labelContainer=document.createElement("div");
  labelContainer.classList.add("label-container","d-flex","flex-row");
  todoElement.appendChild(labelContainer);

  //creating label element
  let labelElement=document.createElement("label");
  labelElement.setAttribute("for",checkboxId);
  labelElement.id=labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent=todo.text;

  labelContainer.appendChild(labelElement);

  //creating delete icon container
  
  let deleteIconContainer=document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");

  labelContainer.appendChild(deleteIconContainer);

  //adding delete icon

  let deleteIcon=document.createElement("i");
  deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
  deleteIcon.onclick= function() {
    onDeleteTodo(todoId);
  }

  deleteIconContainer.appendChild(deleteIcon);


}
 



function onAddTodo() {

  let todosCount=todoList.length;
  todosCount=todosCount+1;


  let userInputElement=document.getElementById("todoUserInput");
  let userInputValue=userInputElement.value;
  if (userInputValue==="") {
    alert("Enter Valid input");
    return;
  }



  let newTodo = {
   text:userInputValue,
   uniqueNo:todosCount

  };

  CreateAndAppendTodo(newTodo);
  userInputElement.value="";

}


//create todo list using (for of)loop
for (let eachTodo of todoList) {
  CreateAndAppendTodo(eachTodo);
}
