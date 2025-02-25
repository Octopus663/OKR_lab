// 1. Використання document.write (не рекомендується, оскільки очищає сторінку)
document.write('<h2>Вітаємо на сторінці</h2>');

// 2. Створення елементів через document.createElement та document.createTextNode
const newParagraph = document.createElement('p');
const textNode = document.createTextNode('Цей абзац додано динамічно.');
newParagraph.appendChild(textNode);

document.body.appendChild(newParagraph);

// 3. Використання node.append для додавання тексту та вузлів
const div = document.createElement('div');
div.append('Текст у div.', newParagraph);
document.body.appendChild(div);

// 4. Використання node.prepend для додавання тексту на початок
const header = document.createElement('h1');
header.textContent = 'Головний заголовок';
document.body.prepend(header);

// 5. Використання node.after для додавання елемента після іншого
const subHeader = document.createElement('h3');
subHeader.textContent = 'Підзаголовок';
header.after(subHeader);

// 6. Використання node.replaceWith для заміни вузла
const newHeader = document.createElement('h1');
newHeader.textContent = 'Оновлений заголовок';
header.replaceWith(newHeader);

// 7. Видалення елемента з DOM
setTimeout(() => {
    newParagraph.remove(); // Видаляємо абзац через 3 секунди
}, 10000);