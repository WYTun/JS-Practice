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
        <button class="done" onclick="
            done();
            renderToDoList();">DONE</button> 
        `;

        toDoListHTML += html;  
    });

    document.querySelector('.todo-list').innerHTML = toDoListHTML;

}

function addToDo(){
    const inputElement = document.querySelector('.name-input');
    const name  = inputElement.value;

    const dateElement = document.querySelector('.dueDate-input');
    const today = new Date().toISOString().split('T')[0];
    let dueDate = dateElement.value;
    if (dueDate === ''){
        dueDate = today;
    }

    todoList.push({name, dueDate})
    inputElement.value = '';
    dateElement.value='';
    renderToDoList(); 
}


function done(){
    console.log('done');
    const toDoName = document.querySelector('.name');
    const toDoDate = document.querySelector('.date');
    const deleteButton = document.querySelector('delete');
    const doneButton = document.querySelector('done');

    

}