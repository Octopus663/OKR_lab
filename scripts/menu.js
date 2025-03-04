// Функція для підсвічування елементів списку при кліку
function initListHighlighting() {
    // Отримуємо всі списки на сторінці
    let lists = document.querySelectorAll("ul, ol");

    lists.forEach(list => {
        // Додаємо один обробник на весь список
        list.onclick = function(event) {
            // Перевіряємо, чи клік був саме по елементу списку
            if (event.target.tagName === "LI") {
                // Знімаємо підсвічування з усіх елементів списку
                let items = this.querySelectorAll("li");
                items.forEach(item => {
                    item.style.backgroundColor = "";
                    item.style.fontWeight = "normal";
                });

                // Підсвічуємо вибраний елемент
                event.target.style.backgroundColor = "#d1ecf1";
                event.target.style.fontWeight = "bold";

                console.log(`Вибрано елемент списку: ${event.target.textContent}`);
            }
        };
    });
}

// Функція для створення меню з data-атрибутами
function createBehaviorMenu() {
    let mainContainer = document.getElementById("main-container");
    if (!mainContainer) return;

    // Створюємо контейнер для меню
    let menuContainer = document.createElement("div");
    menuContainer.className = "behavior-menu";
    menuContainer.style.margin = "20px 0";
    menuContainer.style.padding = "10px";
    menuContainer.style.border = "1px solid #ccc";
    menuContainer.style.borderRadius = "5px";

    // Додаємо заголовок меню
    let menuHeading = document.createElement("h3");
    menuHeading.textContent = "Меню готелю ";
    menuContainer.appendChild(menuHeading);

    // Створюємо кнопки меню з data-атрибутами
    const menuItems = [
        { text: "Інформація про готель", action: "showHotelInfo" },
        { text: "Показати номери", action: "showRooms" },
        { text: "Замовити послугу", action: "orderService" },
        { text: "Контакти", action: "showContacts" }
    ];

    // Додаємо кнопки в меню
    menuItems.forEach(item => {
        let button = document.createElement("button");
        button.textContent = item.text;
        button.setAttribute("data-action", item.action);
        button.style.margin = "0 5px";
        menuContainer.appendChild(button);
    });

    // Додаємо єдиний обробник для всього меню
    menuContainer.addEventListener("click", function(event) {
        // Перевіряємо, чи клік був по кнопці
        if (event.target.tagName === "BUTTON") {
            // Отримуємо значення data-action
            let action = event.target.getAttribute("data-action");

            // Виконуємо відповідну дію
            executeAction(action);
        }
    });

    // Вставляємо меню на сторінку
    mainContainer.prepend(menuContainer);
}

// Функція для виконання дій відповідно до data-action
function executeAction(action) {
    switch(action) {
        case "showHotelInfo":
            alert("Готель 'Затишок' - ваш комфортний відпочинок у серці міста!");
            break;
        case "showRooms":
            if (confirm("Бажаєте переглянути доступні номери?")) {
                location.href = "rooms.html";
            }
            break;
        case "orderService":
            let service = prompt("Яку послугу бажаєте замовити?", "Сніданок");
            if (service) {
                alert(`Послугу "${service}" замовлено. Наш менеджер зв'яжеться з вами!`);
            }
            break;
        case "showContacts":
            location.href = "contacts.html";
            break;
        default:
            alert("Дія не визначена!");
    }
}

// Виконання функцій після завантаження сторінки
document.addEventListener("DOMContentLoaded", function() {
    initListHighlighting();
    createBehaviorMenu();
});