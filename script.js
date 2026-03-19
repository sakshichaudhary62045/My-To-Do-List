const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn" style="margin-left: 10px; padding: 2px 8px; cursor: pointer; color: red;">X</button>
        `;
        taskList.appendChild(li);
        
        taskInput.value = "";

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.onclick = function() {
            li.remove(); 
        };
    } else {
        alert("enter something here");
    }
});
