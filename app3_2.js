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
// Mousedown(길게 누르고 있을 때)
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup(길게 누르고 있다가 땔 때)
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover(enter와 leave와 다르게 element안에서 다른 element로 이동했을 때 작동)
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  // 마우스 커서의 위치를 heading에 출력해보는 예제
  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  // 문서의 백그라운드 색상을 커서 위치의 값에 따라 변경하는 예제
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


////////////////////////////////////
// 31. Keyboard & Input Events 
////////////////////////////////////

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input(기본 input value로 지정된 값을 clear)
taskInput.value = '';

form.addEventListener('submit', runEvent);

// Keydown(누를 때마다)
taskInput.addEventListener('keydown', runEvent);
// Keydown(누르고 땔 때)
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus(타이핑하고싶은 지점을 클릭하면 작동)
taskInput.addEventListener('focus', runEvent);
// Blur(클릭하고 다른 지점을 클릭하면 작동)
taskInput.addEventListener('blur', runEvent);
// Cut(자르기 시도하면 작동)
taskInput.addEventListener('cut', runEvent);
// Paste(복사 시도하면 작동)
taskInput.addEventListener('paste', runEvent);
// Input(붙이기 시도하면 작동)
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


// EVENT DELGATION -> 똑같은 태그를 가지고 있는 자식에 대해서 실행
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    //위의 방법은 classname이 조금이라도 바뀌면 사용 불가능
   console.log('delete item');
 }

  if(e.target.parentElement.classList.contains('delete-item')){
    //아래는 delet-item을 포함하는 모든것에 대해서 작동
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}


////////////////////////////////////
// 33. Local & Session Storage 
////////////////////////////////////

// set local storage item(영구적으로 남음)
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// set session storage item(창을 닫았다가 다시 열면 없어짐)
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
    
    //task를 배열로 저장하는 작업
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));//json object로 저장
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