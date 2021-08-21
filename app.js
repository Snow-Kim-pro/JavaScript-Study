document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;
  
  //task를 배열로 저장하는 작업
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    //json object로 저장
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});