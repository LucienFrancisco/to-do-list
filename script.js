function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') {
        alert('Please enter a task before adding.');
        return;
    }

    const task = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        task.classList.toggle('completed');
    };
    const span = document.createElement('span');
    span.textContent = taskInput.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(task);
    };
    task.appendChild(checkbox);
    task.appendChild(span);
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    taskInput.value = '';
}