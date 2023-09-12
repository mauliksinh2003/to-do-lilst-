const inputtext = document.querySelector('#it1');
const addbutton = document.querySelector('#add-button');
const todolistitems = document.querySelector('.todolistitems');

const todolistcontainer = document.querySelector('#todolistcontainer');

// const completetext = document.getElementById('#complete-text');
// const completetaskdiv = document.querySelector('.completetaskdiv');

// const todoText = document.querySelector('#todo-text');

const listitems = document.querySelector('.listitems');


function updateparaghraph() {

    const listitems = document.createElement('div');
    listitems.classList.add('listitems');
    todolistitems.appendChild(listitems);


    const checkbox = document.createElement('input');
    // checkbox.onclick="printCompletedTasks()" ;
    checkbox.type = "checkbox";
    checkbox.id = 'checkbox';
    listitems.appendChild(checkbox);


    const todoText = document.createElement('p');
    todoText.setAttribute("type", "text");
    todoText.id = 'todo-text';
    todoText.innerText = inputtext.value;
    listitems.appendChild(todoText);


    const editbutton = document.createElement('button');
    editbutton.id = 'button-for-edit';

    const editimage = document.createElement('img');
    editimage.src = '84380.png';
    editimage.width = 20;
    editimage.height = 15;
    editbutton.appendChild(editimage);
    listitems.appendChild(editbutton);


    editbutton.addEventListener('click', () => {
        inputtext.value = todoText.innerText;
        const parent = editbutton.parentElement;
        parent.parentElement.removeChild(parent);
        inputtext.focus();
    })


    const deletebutton = document.createElement('button');
    deletebutton.id = 'button-for-delete';

    const deleteimage = document.createElement('img');
    deleteimage.src = 'trash.png';
    deleteimage.width = 20;
    deleteimage.height = 15;
    deletebutton.appendChild(deleteimage);
    listitems.appendChild(deletebutton);


    deletebutton.addEventListener('click', () => {

        var x = confirm("Are you sure to delete");
        // alert(x);
        if (x == true) {
            inputtext.value = '';
            const parent = deletebutton.parentElement;
            parent.parentElement.removeChild(parent);
        }
        else {
            inputtext.value;
        }
    })


    // Add all complete task into complete task list 

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // Move the completed task to the completed task list
            const completetext = document.getElementById('complete-text');
            completetext.appendChild(listitems);

        } else {
            // Move the uncompleted task back to the task list
            todolistitems.appendChild(listitems);
        }
    });

}



addbutton.addEventListener('click', () => {
    if (inputtext.value.trim().length == '')
        return;

    updateparaghraph();

    inputtext.value = '';


})







inputtext.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        updateparaghraph();


        inputtext.value = '';

    }

})
