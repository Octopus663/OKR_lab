
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
// JavaScript
// 1. Зміна кольору заголовка
function changeHeadingColor() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        heading.style.color = "#fffb00";
    }
}

// 2. Налаштування інтервалу абзаців
function adjustParagraphs() {
    document.querySelectorAll("p").forEach(p => {
        p.style.lineHeight = "1.5";
    });
}

// 3. Вивід властивостей вузла
function logNodeProperties() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        console.log("innerHTML:", heading.innerHTML);
        console.log("outerHTML:", heading.outerHTML);
        console.log("textContent:", heading.textContent);
    }
}

// 4. Створення сповіщення
function createNotification() {
    const newElement = document.createElement("div");
    newElement.className = "notification";
    newElement.textContent = "Ця інформація була додана динамічно через JavaScript!";
    document.body.append(newElement);
}

// 5. Додавання тимчасового повідомлення
function addTemporaryMessage() {
    const tempElement = document.createElement("p");
    tempElement.textContent = "Цей абзац буде видалено через 5 секунд.";
    document.body.prepend(tempElement);

    setTimeout(() => {
        tempElement.remove();
        alert("Елемент видалено!");
    }, 5000);
}

// 6. Вставка після заголовка
function insertAfterHeading() {
    const heading = document.getElementById("main-heading");
    if (heading) {
        const infoElement = document.createElement("p");
        infoElement.textContent = "Цей абзац додано після заголовка.";
        heading.after(infoElement);
    }
}

// 7. Заміна повідомлення
function replaceMessage() {
    const tempElement = document.createElement("p");
    tempElement.textContent = "Цей абзац буде замінено через 3 секунди.";
    document.body.prepend(tempElement);

    setTimeout(() => {
        tempElement.replaceWith(document.createTextNode("Заміна виконана!"));
    }, 3000);
}

// 8. Небезпечний запис (використовуйте з обережністю!)
function dangerousWrite() {
    if(confirm("Ця дія перезапише всю сторінку! Продовжити?")) {
        document.write("<h3>Сторінку перезаписано за допомогою document.write</h3>");
    }
}
demonstrateDOMMethods();
console.log("Файл script.js підключено!");

