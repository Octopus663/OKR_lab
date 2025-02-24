
function dialogWithUser() {
    let userName = prompt("Введіть ваше ім'я:", "");

    if (userName === null || userName === "") {
        alert("Ви не ввели ім'я!");
        return;
    }

    let userChoice = confirm("Шановний " + userName + ", бажаєте переглянути інформацію про наш готель?");

    if (userChoice) {
        let roomType = prompt("Який тип номера вас цікавить? (стандарт/покращений/люкс/сімейний)", "");

        if (roomType) {
            roomType = roomType.toLowerCase();
            let message = "";

            // Використовуємо умовне розгалуження
            switch(roomType) {
                case "стандарт":
                    message = "Стандартний номер - комфортний номер для двох осіб із базовими зручностями.";
                    break;
                case "покращений":
                    message = "Покращений номер - збільшений номер із сучасним інтер'єром і широким ліжком.";
                    break;
                case "люкс":
                    message = "Люкс - просторий номер із видом на місто, великим балконом і розкішним інтер'єром.";
                    break;
                case "сімейний":
                    message = "Сімейний номер - розрахований на 4 осіб із дитячим куточком.";
                    break;
                default:
                    message = "На жаль, у нас немає такого типу номера.";
            }

            alert(message);

            // Використовуємо цикл для пропозиції додаткових послуг
            let additionalServices = ["прибирання", "сніданок", "басейн", "спа"];
            let selectedServices = [];

            for (let i = 0; i < additionalServices.length; i++) {
                let serviceChoice = confirm("Бажаєте додати послугу: " + additionalServices[i] + "?");
                if (serviceChoice) {
                    selectedServices.push(additionalServices[i]);
                }
            }

            if (selectedServices.length > 0) {
                alert("Ви обрали додаткові послуги: " + selectedServices.join(", "));
            } else {
                alert("Ви не обрали додаткових послуг.");
            }
        }
    } else {
        alert("Дякуємо за відвідування нашого сайту!");
    }
}

// Функція виводу інформації про розробника з параметрами
function developerInfo(lastName, firstName, position = "Веб-розробник") {
    alert("Інформація про розробника:\nПрізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}

function compareUserStrings() {
    let string1 = prompt("Введіть перший рядок для порівняння:", "");

    if (string1 === null) {
        alert("Порівняння скасовано.");
        return;
    }

    let string2 = prompt("Введіть другий рядок для порівняння:", "");

    if (string2 === null) {
        alert("Порівняння скасовано.");
        return;
    }

    compareStrings(string1, string2);
}

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert("Більший рядок: " + str1 + " (довжина: " + str1.length + " символів)");
        return str1;
    } else if (str2.length > str1.length) {
        alert("Більший рядок: " + str2 + " (довжина: " + str2.length + " символів)");
        return str2;
    } else {
        alert("Рядки мають однакову довжину (" + str1.length + " символів):\n" +
            str1 + " та " + str2);
        return "Рядки однакової довжини";
    }
}

// Функція для зміни фону сторінки на 30 секунд
function changeBackgroundTemporarily() {
    let originalBgColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f0c060"; // Змінюємо на жовтий колір

    setTimeout(function() {
        document.body.style.backgroundColor = originalBgColor;
        alert("Фон сторінки повернуто до початкового стану!");
    }, 30000); // 30 секунд = 30000 мс

    alert("Фон сторінки змінено на 30 секунд!");
}

// Функція для перенаправлення на іншу сторінку
function redirectToPage(url) {
    if (confirm("Бажаєте перейти на сторінку " + url + "?")) {
        location.href = url;
    }
}

// Функція для демонстрації DOM методів
function demonstrateDOMMethods() {
    // Метод getElementById
    let mainHeading = document.getElementById("main-heading");
    if (mainHeading) {
        mainHeading.style.color = "#007bff";
    }

    // Метод querySelectorAll
    let paragraphs = document.querySelectorAll("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.lineHeight = "1.5";
    }

    // Використання властивостей DOM-вузла
    if (mainHeading) {
        // innerHTML
        console.log("innerHTML: " + mainHeading.innerHTML);

        // outerHTML
        console.log("outerHTML: " + mainHeading.outerHTML);

        // textContent
        console.log("textContent: " + mainHeading.textContent);
    }

    // Створюємо новий елемент за допомогою createElement
    let newElement = document.createElement("div");
    newElement.className = "notification";

    // Створюємо текстовий вузол за допомогою createTextNode
    let textNode = document.createTextNode("Ця інформація була додана динамічно через JavaScript!");

    // Додаємо текстовий вузол до елемента
    newElement.appendChild(textNode);

    // Додаємо елемент до DOM за допомогою append
    document.body.append(newElement);

    // Створюємо ще один елемент для демонстрації інших методів
    let anotherElement = document.createElement("p");
    anotherElement.textContent = "Цей абзац буде видалено через 5 секунд.";

    // Використовуємо prepend для додавання на початок body
    document.body.prepend(anotherElement);

    // Демонстрація методу after
    if (mainHeading) {
        let infoElement = document.createElement("p");
        infoElement.textContent = "Цей абзац додано після заголовка.";
        mainHeading.after(infoElement);
    }

    // Демонстрація методу replaceWith
    setTimeout(function() {
        anotherElement.replaceWith(document.createTextNode("Заміна виконана!"));
    }, 3000);

    // Демонстрація методу remove
    setTimeout(function() {
        let replacedNode = document.body.querySelector("body > :first-child");
        if (replacedNode && replacedNode.textContent === "Заміна виконана!") {
            replacedNode.remove();
            alert("Елемент видалено!");
        }
    }, 5000);

    // Демонстрація document.write
    // Увага: document.write очищає поточну сторінку, тому краще використовувати в обмежених випадках
    let demonstrateDocWrite = false; // Змініть на true, щоб побачити дію
    if (demonstrateDocWrite) {
        document.write("<h3>Сторінку перезаписано за допомогою document.write</h3>");
    }
}