const inputTodo = document.querySelector("#text-todo");
const btnTodo = document.querySelector("#btn-todo")
const ul = document.querySelector("ul")
const empty = document.querySelector("#empty")

btnTodo.addEventListener("click", (e) => {

    const p = document.createElement('p')
    const li = document.createElement('li');
    const input = document.createElement("input");

    const text = inputTodo.value;



    if (text !== '') {
        const btnDelete = document.createElement("button");
        btnDelete.className = "btn btn-outline-danger"
        btnDelete.data = "hola";
        btnDelete.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-trash" viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1     .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1     1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5     3V2h11v1h-11z" />
            </svg>
        `;

        empty.style.display = "none"


        input.type = "checkbox"
        input.className = "form-check-input"

        li.className = "list-group-item d-flex justify-content-between align-items-center"

        p.textContent = text;
        ul.className = "list-group"

        ul.appendChild(li)
        li.appendChild(input)
        li.appendChild(p)
        li.appendChild(btnDelete)

        btnDelete.addEventListener("click", (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item)

            const items = document.querySelectorAll("li");

            if (items.length === 0) {
                empty.style.display = "block";
            }
        });



        inputTodo.value = "";

    } else {
        alert("No has agregado ninguna tarea")
    }





    //evento al input checkbox
    input.addEventListener('change', function () {
        p.style.textDecorationLine = this.checked ? "line-through" : "none";
    });


});