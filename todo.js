const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('tasklist');

function addTask() {
    const tasktext = taskInput.value.trim();
    if (taskInput === "") return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${tasktext}</span>
                  <button onclick="taskdone(this)" id='green'>Done</button>
                 
                  <button onclick="taskdelete(this)" id='red'>Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = '';
}

function taskdone(button) {
    const task = button.parentElement;
    task.classList.toggle('completed')

}
function taskdelete(button) {
    const task = button.parentElement;
    task.remove();

}
