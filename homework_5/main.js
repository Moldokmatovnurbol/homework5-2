const input = document.getElementById('input');
const createButton = document.getElementById('create_button');
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (!input.value.trim()) return alert('напиши что нибудь')
    const div = document.createElement('div');
    const text = document.createElement('h3');
    div.setAttribute('class', 'block_text');
    text.innerText = input.value;
    div.appendChild(text);
    todoList.append(div);
    input.value = '';

    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons_div');
    deleteBtn.setAttribute('class', 'delete_button');
    editBtn.setAttribute('class', 'edit_button');
    deleteBtn.innerHTML = "delete"
    editBtn.innerHTML = "edit"
    buttons.append(deleteBtn)
    buttons.append(editBtn)
    div.append(buttons);

    deleteBtn.onclick = () =>{
        todoList.removeChild(div)
    }
    editBtn.onclick = () =>{
        const edited = prompt("ведите измененный текст").trim()
        if(edited === "")return alert("напиши что нибудь")
        else text.innerText = edited;
    }
};

createButton.addEventListener('click', createTodo)
createButton.onclick = (e) => createTodo();
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') createTodo();
});
