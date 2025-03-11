document.addEventListener("DOMContentLoaded", function () {
    // ---------- ЧАСТИНА 1: Різні способи призначення обробників подій ----------
    const box = document.getElementById("box");
    const dropzone = document.getElementById("dropzone");
    const removeHandlerBtn = document.getElementById("removeHandler");
    let isDragging = false;
    let offsetX, offsetY;

    // 1. Призначення через атрибут (реалізовано в HTML):
    // <div id="boxAttribute" onclick="handleAttributeClick(event)"></div>
    function handleAttributeClick(event) {
        alert("Обробник через атрибут onclick спрацював!");
    }
    // Робимо функцію доступною глобально
    window.handleAttributeClick = handleAttributeClick;

    // 2. Призначення через властивість
    const boxProperty = document.getElementById("boxProperty");
    boxProperty.onclick = function(event) {
        boxProperty.style.backgroundColor = "yellow";
        alert("Обробник через властивість onclick спрацював!");
    };

    // 3. Призначення кількох обробників одній події
    function firstHandler(event) {
        console.log("Перший обробник події click спрацював");
    }

    function secondHandler(event) {
        console.log("Другий обробник події click спрацював");
    }

    box.addEventListener("click", firstHandler);
    box.addEventListener("click", secondHandler);

    // 4. Призначення об'єкта як обробника та використання handleEvent
    const handlerObject = {
        handleEvent: function(event) {
            console.log("Метод handleEvent спрацював");
            // Виведення елемента, на якому спрацював обробник
            console.log("Елемент:", event.currentTarget);
            alert("Об'єкт-обробник спрацював на елементі: " + event.currentTarget.id);
        }
    };

    const boxObject = document.getElementById("boxObject");
    boxObject.addEventListener("mouseover", handlerObject);

    // 5. Видалення обробника
    removeHandlerBtn.addEventListener("click", function() {
        boxObject.removeEventListener("mouseover", handlerObject);
        alert("Обробник події mouseover видалено з boxObject");
    });

    // Hover effects with event.relatedTarget
    box.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "lightblue";
    });

    box.addEventListener("mouseout", function (event) {
        if (!event.relatedTarget || !event.relatedTarget.closest("#box")) {
            event.target.style.backgroundColor = "lightgray";
        }
    });

    // Dragging functionality
    box.addEventListener("mousedown", function (event) {
        isDragging = true;
        offsetX = event.clientX - box.offsetLeft;
        offsetY = event.clientY - box.offsetTop;
        box.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", function (event) {
        if (isDragging) {
            box.style.left = event.clientX - offsetX + "px";
            box.style.top = event.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        box.style.cursor = "grab";
    });

    // Drag & Drop API
    box.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", "Dragged box");
    });

    dropzone.addEventListener("dragover", function (event) {
        event.preventDefault();
        dropzone.style.backgroundColor = "lightgreen";
    });

    dropzone.addEventListener("dragleave", function () {
        dropzone.style.backgroundColor = "#ddd";
    });

    dropzone.addEventListener("drop", function (event) {
        event.preventDefault();
        dropzone.style.backgroundColor = "#ddd";
        alert("Елемент перетягнуто!");
    });

    // ---------- ЧАСТИНА 2: Робота зі списком та меню ----------

    // 1. Робота зі списком і підсвічування елементів
    const list = document.getElementById("itemsList");

    // Один обробник для всього списку (делегування подій)
    list.addEventListener("click", function(event) {
        // Використання event.target для визначення клікнутого елемента
        if (event.target.tagName === "LI") {
            // Спочатку знімаємо підсвічування з усіх елементів
            const items = list.querySelectorAll("li");
            items.forEach(item => item.classList.remove("highlighted"));

            // Підсвічуємо клікнутий елемент
            event.target.classList.add("highlighted");
        }
    });

    // 2. Створення меню з прийомом проектування "Поведінка"
    const menu = document.getElementById("menu");

    // Один обробник для всього меню
    menu.addEventListener("click", function(event) {
        // Перевіряємо, чи клікнуто на кнопку
        if (event.target.tagName === "BUTTON") {
            // Отримуємо значення атрибута data-action
            const action = event.target.dataset.action;

            // Виконуємо відповідну функцію залежно від значення data-action
            if (action === "add") {
                addItem();
            } else if (action === "remove") {
                removeItem();
            } else if (action === "highlight") {
                highlightAll();
            }
        }
    });

    // Функції для кнопок меню
    function addItem() {
        const newItem = document.createElement("li");
        newItem.textContent = "Новий елемент " + (list.children.length + 1);
        list.appendChild(newItem);
    }

    function removeItem() {
        if (list.children.length > 0) {
            list.removeChild(list.lastElementChild);
        }
    }

    function highlightAll() {
        const items = list.querySelectorAll("li");
        items.forEach(item => item.classList.add("highlighted"));
    }
});