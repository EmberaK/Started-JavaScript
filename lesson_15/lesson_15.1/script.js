document.addEventListener("DOMContentLoaded", () => {
    const getValueInput = document.querySelector(".js--form__input");
    const pushValueInput = document.querySelector(".form__btn");
    const saveItemInList = document.querySelector(".js--todos-wrapper");

    // Функция для сохранения списка задач в localStorage
    const saveToLocalStorage = () => {
        const todos = [];
        document.querySelectorAll(".todo-item").forEach(item => {
            const description = item.querySelector(".todo-item__description").textContent;
            const checked = item.querySelector("input[type='checkbox']").checked;
            todos.push({ description, checked });
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    // Функция для загрузки списка задач из localStorage
    const loadFromLocalStorage = () => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.forEach(todo => {
            const createItemInList = document.createElement("li");
            createItemInList.classList.add("todo-item");

            const createCheckbox = document.createElement("input");
            createCheckbox.type = "checkbox";
            createCheckbox.checked = todo.checked;

            const createDescription = document.createElement("span");
            createDescription.classList.add("todo-item__description");
            createDescription.textContent = todo.description;

            const createButtonDelete = document.createElement("button");
            createButtonDelete.classList.add("todo-item__delete");
            createButtonDelete.textContent = "Видалити";

            createItemInList.appendChild(createCheckbox);
            createItemInList.appendChild(createDescription);
            createItemInList.appendChild(createButtonDelete);

            saveItemInList.appendChild(createItemInList);

            createCheckbox.addEventListener("click", () => {
                if (createCheckbox.checked) {
                    createDescription.style.textDecoration = "line-through";
                    createButtonDelete.style.textDecoration = "line-through";
                } else {
                    createDescription.style.textDecoration = "none";
                    createButtonDelete.style.textDecoration = "none";
                }
                saveToLocalStorage();
            });

            createButtonDelete.addEventListener("click", () => {
                saveItemInList.removeChild(createItemInList);
                saveToLocalStorage();
            });

            // Применение стилей при загрузке
            if (createCheckbox.checked) {
                createDescription.style.textDecoration = "line-through";
                createButtonDelete.style.textDecoration = "line-through";
            }
        });
    };

    // Загрузка задач при загрузке страницы
    loadFromLocalStorage();

    pushValueInput.addEventListener("click", () => {
        if (getValueInput.value.trim() === "") {
            alert("Please, enter sentence in input");
        } else {
            const createItemInList = document.createElement("li");
            createItemInList.classList.add("todo-item");

            const createCheckbox = document.createElement("input");
            createCheckbox.type = "checkbox";

            const createDescription = document.createElement("span");
            createDescription.classList.add("todo-item__description");
            createDescription.textContent = getValueInput.value;

            const createButtonDelete = document.createElement("button");
            createButtonDelete.classList.add("todo-item__delete");
            createButtonDelete.textContent = "Видалити";

            createItemInList.appendChild(createCheckbox);
            createItemInList.appendChild(createDescription);
            createItemInList.appendChild(createButtonDelete);

            saveItemInList.appendChild(createItemInList);

            getValueInput.value = "";

            createCheckbox.addEventListener("click", () => {
                if (createCheckbox.checked) {
                    createDescription.style.textDecoration = "line-through";
                    createButtonDelete.style.textDecoration = "line-through";
                } else {
                    createDescription.style.textDecoration = "none";
                    createButtonDelete.style.textDecoration = "none";
                }
                saveToLocalStorage();
            });

            createButtonDelete.addEventListener("click", () => {
                saveItemInList.removeChild(createItemInList);
                saveToLocalStorage();
            });

            saveToLocalStorage();
        }
    });
});
