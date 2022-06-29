const inputTodo = document.querySelector("#text-todo");
const btnTodo = document.querySelector("#btn-todo")
const ul = document.querySelector("ul")
const empty = document.querySelector("#empty")

btnTodo.addEventListener("click", (e) => {
    console.log("click")

    const input = document.createElement("input")

    input.type = "checkbox"
    input.className = "form-check-input"

    const text = inputTodo.value;
    const li = document.createElement('li');

    li.className = "list-group-item d-flex justify-content-between align-items-center"
    const p = document.createElement('p')
    p.textContent = text;

    li.appendChild(p)
    li.appendChild(input)
    ul.appendChild(li)
});

const addDelete = () => {
    const deleteBtn = document.createElement('button')
}