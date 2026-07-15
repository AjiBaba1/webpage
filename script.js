// Academic PLanner
const taskInput = document.querySelector('taskInput');
const addTaskButton = document.querySelector('addTaskButton');
const taskList = document.querySelector('taskList');

if (addTaskButton) {
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');

        const taskSpan = document.createElement('span');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';

        completeButton.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    });
}