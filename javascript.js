var taskInput = document.querySelector('#task')
var addButton = document.querySelector('#btn')
var taskList = document.querySelector('#list')

addButton.addEventListener('click', () => {
    if (taskInput.value === '') {
        alert('Task is required !!!')
        return;
    }

    let taskData = taskInput.value;
    var listItem = document.createElement('li')

    var iconItem = document.createElement('i')
    iconItem.classList.add('ri-circle-line')

    iconItem.addEventListener('click', () => {
        if (iconItem.classList.contains('ri-circle-line')) {
            iconItem.classList.remove('ri-circle-line')
            iconItem.classList.add('ri-checkbox-circle-line')
        } else if (iconItem.classList.contains('ri-checkbox-circle-line')) {
            iconItem.classList.remove('ri-checkbox-circle-line')
            iconItem.classList.add('ri-circle-line')
        }
        taskDiv.classList.toggle('checked')
    })

    var paraItem = document.createElement('p')
    paraItem.innerText = taskData;

    var taskDiv = document.createElement('div')
    taskDiv.classList.add('task-item')

    taskDiv.append(iconItem)
    taskDiv.append(paraItem)

    listItem.append(taskDiv)

    var deleteIcon = document.createElement('i');
    deleteIcon.classList.add('ri-delete-bin-6-line');
    listItem.append(deleteIcon)

    deleteIcon.addEventListener('click', () => {
        listItem.remove()
    })

    taskList.append(listItem);
    taskInput.value = ''
})

