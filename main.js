
  // Learn Code Mouse In and Out Javascript
  function learnCode() {

    let rotate = document.querySelector('.learnCode')

    rotate.style.transform = "rotate(6deg)";

  }

  function learnCodeMouseOut() {

    let rotateBack = document.querySelector('.learnCode')

    rotateBack.style.transform = "rotate(-6deg)"

  }

//   // Sign Up Form Background Colour change on select

//   function bgColorChange() {
//     let formSelect = document.querySelector('#signup-form-section')
//     formSelect.style.backgroundColor = "#ffb4a2";
//   }

// // New JS

// let firstPrize = 299;
// const companyName = "CLG";
// let greeting = "Hello!";
// let morning = true;

// // console.log(morning);
// // console.log(firstPrize);
// // console.clear();



// let firstWinner = "Grace";
// // console.log("The winner is " + firstWinner);
// // console.log(`The winner is still ${firstWinner}`);

// let winnerAnnouncement = `The winner is really still ${firstWinner}`;

// let result = winnerAnnouncement.toUpperCase();

// // console.log(result);

// // console.log(`${result.length}`);

// let resultLength = result.length;
// console.log(resultLength)


// // Age Function using if, else if and else
// let age = 16;

// if (age >= 18) {
//     console.log("You are old enough!")
// } else if (age < 15) {
//     console.log("Wow you are really young, too young!")
// } else {
//     console.log("Sorry, you aren't old enough")
// }

// Username Alerts
// let userName = 'CLG Student';

// function showMessage() {
//     userName = "Nakkiah";

//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// alert(userName);

// showMessage();

// alert(userName); /// This one shows up as Nakkiah because it is called AFTER the showMessage function was called, and in that function the userName variable was reassigned permanently from CLG Student to nakkiah


// CLG Practice - Module - Functions

// let discount = 10;
// const tee = 20;
// const pants = 30;
// const candle = 50;


// function shoppingSale(candle,pants) {
//     candle = 20;
//     pants = 20;
//     let shoppingCart = tee + pants + candle;
// if (shoppingCart <= 60) {
// console.log("You need to spend more");
// return;
// } else {
//     console.log(shoppingCart -= discount);

// }
// }

// shoppingSale();


// Web API practice

// function timeoutExample1() {
//     console.log("This message is first, but delayed 4 seconds");
// }

// function timeoutExample2() {
//     console.log("This message is second, but delayed 1 second");
// }

// setTimeout(timeoutExample1, 4000);
// setTimeout(timeoutExample2, 1000);

// console.log("No delay here");



// document.getElementById("signup-form-section").style.backgroundColor = "#f8ced2";

// let wrappers = document.querySelector(".field");

// wrappers.style.backgroundColor = "#ef4b54";


// TO DO LIST

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//  Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);


// Functions
function addTodo(event){
    // Prevent form from submitting
event.preventDefault();
// Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("Todo-item");
todoDiv.appendChild(newTodo);
// CALLING - Add Todo to Local Storage
saveLocalTodos(todoInput.value)
// Check Mark Button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Check Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append to List
todoList.appendChild(todoDiv);
// Clear Todo Input Value
todoInput.value = "";
}

// Delete field
function deleteCheck(e) {
const item = e.target;
// Delete Todo
if (item.classList[0] === "trash-btn") {
  const todo = item.parentElement;
  // Animation
  todo.classList.add("fall");
  removeLocalTodos(todo);
todo.addEventListener("transitionend", function(){
todo.remove();
});
}

// Check Mark
if (item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle("completed");
}
}


// Filter Function
function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function(todo) {
    switch (e.target.value) {
case "all":
    todo.style.display = "flex";
    break;
    case "completed":
        if (todo.classList.contains("completed")) {
todo.style.display = "flex";
        } else {
            todo.style.display = "none";
        }
break;
case "uncompleted":
    if (!todo.classList.contains('completed')) {
        todo.style.display = "flex";
    } else {
        todo.style.display = "none";
    }
    break;
    }
});
}


// Save ToDo's in Local Storage
function saveLocalTodos(todo){
    // Check - Is there already saved To Do's
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    }




    function getTodos() {
        let todos; 
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        // Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todo;
newTodo.classList.add("Todo-item");
todoDiv.appendChild(newTodo);

// Check Mark Button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Check Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append to List
todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
const todoIndex = todo.children[0].innerText;
todos.splice(todos.indexOf(todoIndex), 1);
localStorage.setItem("todos", JSON.stringify(todos));
}

