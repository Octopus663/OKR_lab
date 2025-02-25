// Функція-обробник для події mouseenter
function handleMouseEnter(event) {
    this.style.backgroundColor = "#ffcccb"; // Світло-червоний
    console.log("Курсор наведено на елемент (через властивість)");
}

// Функція-обробник для події mouseleave
function handleMouseLeave(event) {
    this.style.backgroundColor = "";
    console.log("Курсор залишив елемент (через властивість)");
}

// Функція-обробник для події click
function handleClick(event) {
    alert("Клік по елементу!");
    console.log("Клік по елементу (через addEventListener)");
}

// Другий обробник для тієї ж події click
function secondClickHandler(event) {
    console.log("Другий обробник для події click");
}

// Об'єкт з методом handleEvent для використання як обробник
let clickObserver = {
    handleEvent(event) {
        alert(`Обробник-об'єкт спрацював на елементі: ${event.currentTarget.tagName}, 
               ID: ${event.currentTarget.id || "немає"}, 
               Клас: ${event.currentTarget.className || "немає"}`);
        console.log("Клік оброблено об'єктом через handleEvent", event.currentTarget);
    }
};

// Функція для ініціалізації обробників подій
function initMouseEvents() {
    // 1. Додавання обробників через властивості
    let headingElement = document.getElementById("main-heading");
    if (headingElement) {
        headingElement.onmouseenter = handleMouseEnter;
        headingElement.onmouseleave = handleMouseLeave;
    }

    // 2. Додавання через addEventListener - декілька обробників для однієї події
    let demoContainer = document.getElementById("demo-container");
    if (demoContainer) {
        demoContainer.addEventListener("click", handleClick);
        demoContainer.addEventListener("click", secondClickHandler);

        // 3. Додавання обробника-об'єкта
        let observerButton = document.createElement("button");
        observerButton.textContent = "Тест handleEvent";
        observerButton.id = "observer-btn";
        observerButton.addEventListener("click", clickObserver);
        demoContainer.appendChild(observerButton);

        // 4. Кнопка для видалення обробника
        let removeButton = document.createElement("button");
        removeButton.textContent = "Видалити обробник handleEvent";
        removeButton.onclick = function() {
            observerButton.removeEventListener("click", clickObserver);
            alert("Обробник видалено. Кнопка 'Тест handleEvent' більше не працюватиме.");
        };
        demoContainer.appendChild(removeButton);
    }
}

// Виклик функції ініціалізації після завантаження сторінки
document.addEventListener("DOMContentLoaded", initMouseEvents);