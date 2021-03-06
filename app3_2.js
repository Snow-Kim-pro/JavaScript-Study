////////////////////////////////////
// 27. Creating Elements
////////////////////////////////////

// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);



////////////////////////////////////
// 28. Removing & Replacing Elements
////////////////////////////////////

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);



////////////////////////////////////
// 29. Event Listeners & The Event Object
////////////////////////////////////

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello World');
    e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}


////////////////////////////////////
// 30. Mouse Events 
////////////////////////////////////

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown(?????? ????????? ?????? ???)
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup(?????? ????????? ????????? ??? ???)
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover(enter??? leave??? ????????? element????????? ?????? element??? ???????????? ??? ??????)
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // ????????? ????????? ????????? heading??? ??????????????? ??????
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  // ????????? ??????????????? ????????? ?????? ????????? ?????? ?????? ???????????? ??????
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


////////////////////////////////////
// 31. Keyboard & Input Events 
////////////////////////////////////

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input(?????? input value??? ????????? ?????? clear)
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown(?????? ?????????)
taskInput.addEventListener('keydown', runEvent);
// Keydown(????????? ??? ???)
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus(????????????????????? ????????? ???????????? ??????)
taskInput.addEventListener('focus', runEvent);
// Blur(???????????? ?????? ????????? ???????????? ??????)
taskInput.addEventListener('blur', runEvent);
// Cut(????????? ???????????? ??????)
taskInput.addEventListener('cut', runEvent);
// Paste(?????? ???????????? ??????)
taskInput.addEventListener('paste', runEvent);
// Input(????????? ???????????? ??????)
taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);
  heading.innerText = e.target.value;
 
  // Get input value
  console.log(taskInput.value);

  e.preventDefault();
}


////////////////////////////////////
// 32. Event Bubbling & Delegation 
////////////////////////////////////

// EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});


// EVENT DELGATION -> ????????? ????????? ????????? ?????? ????????? ????????? ??????
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    //?????? ????????? classname??? ??????????????? ????????? ?????? ?????????
   console.log('delete item');
 }

  if(e.target.parentElement.classList.contains('delete-item')){
    //????????? delet-item??? ???????????? ???????????? ????????? ??????
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}


////////////////////////////////////
// 33. Local & Session Storage 
////////////////////////////////////

// set local storage item(??????????????? ??????)
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// set session storage item(?????? ???????????? ?????? ?????? ?????????)
sessionStorage.setItem('name', 'Beth');

// remove from storage
localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();
console.log(name, age);



document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
    
    //task??? ????????? ???????????? ??????
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));//json object??? ??????
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});