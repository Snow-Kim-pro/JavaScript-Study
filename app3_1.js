////////////////////////////////////
//23. Examing The Document Object
////////////////////////////////////
let val;

//document를 통해 html의 각 태그들에 접근 가능
val = document;
val = document.all; //document의 모든 tag를 불러옴
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);



////////////////////////////////////
//24. DOM Selectors For Single Elements
////////////////////////////////////


// document.getElementById()
// getElemetnById는 Id의 이름을 가지고 해당 태그를 불러옴
 console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);



const taskTitle = document.getElementById('task-title');
// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; //HTML 삽입 



// document.querySelector()
// -> id로 select하는게 아니라 모든 것으로 select가능
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

//처음꺼만 지정이 됨. 그래서 아래처럼 지정을 해주어야함
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

//query는 singel elment selector이다!
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



////////////////////////////////////
//25. DOM Selectors For Multiple Elements
////////////////////////////////////


// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';
// ul 태그 중에서 collection-item을 볼 수 있음
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems); 


// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Conver HTML Collection into array
lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;//전체 text를 지정하고 바꾸는 것
});
console.log(lis);


// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    //여러개를 지정하여 저장하였기 때문에 foreach를 사용해서 하나씩 적용시켜야 함. 아래도 마찬가지 
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  //for each를 사용안하고 for를 사용해도 됌
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
//node에 대한 개념 http://tcpschool.com/javascript/js_dom_node 참고하기



////////////////////////////////////
//26. Traversing The DOM
////////////////////////////////////

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes(child는 아래에 속한 모든 노드를 의미)
val = list.childNodes;//list에 속해있는 node를 모두 출력
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 각 number가 의미하는 nodeType
// 1  - Element
// 2  - Attribute (deprecated)
// 3  - Text node 
// 8  - Comment
// 9  - Document itself
// 10 - Doctype


// Get children element nodes(반면, children은 child 중 element만!)
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);