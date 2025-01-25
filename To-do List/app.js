const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button onclick="removeTask(this)">Excluir</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';  // Limpar o campo de input
  }
}

function removeTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
