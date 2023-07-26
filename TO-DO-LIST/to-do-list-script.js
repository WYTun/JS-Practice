const todoList = [];
renderToDoList();

function renderToDoList(){
    let toDoListHTML = [];

    todoList.forEach((toDoObject, index) => {
        const {name, dueDate} = toDoObject;

        const html = `
        <div class="name">${name}</div> 
        <div class="date"> ${dueDate} </div> 
        <button class="delete" onclick="
            todoList.splice(${index}, 1);
            renderToDoList();">Delete</button> 
        `;

        toDoListHTML += html;  
    });

    document.querySelector('.todo-list').innerHTML = toDoListHTML;

}

function addToDo(){
    const inputElement = document.querySelector('.name-input');
    const name  = inputElement.value;

    const dateElement = document.querySelector('.dueDate-input');
    const dueDate = dateElement.value;
    todoList.push({name, dueDate})
    
    inputElement.value = '';
    dateElement.value='';
    renderToDoList();
    
    
}
