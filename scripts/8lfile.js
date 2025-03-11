document.addEventListener("DOMContentLoaded", function () {
    // Робота з подіями миші (hover)
    let tableRows = document.querySelectorAll("tr");

    tableRows.forEach(row => {
        row.addEventListener("mouseover", function (event) {
            event.target.closest("tr").classList.add("highlight");
        });

        row.addEventListener("mouseout", function (event) {
            event.target.closest("tr").classList.remove("highlight");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let box = document.getElementById("box");
    let dropzone = document.getElementById("dropzone");
    let offsetX = 0, offsetY = 0, isDragging = false;

    // Початок перетягування
    box.addEventListener("mousedown", function (event) {
        isDragging = true;
        offsetX = event.clientX - box.getBoundingClientRect().left;
        offsetY = event.clientY - box.getBoundingClientRect().top;
        box.style.position = "absolute";
        box.style.cursor = "grabbing";
    });

    // Рух під час перетягування
    document.addEventListener("mousemove", function (event) {
        if (!isDragging) return;

        box.style.left = (event.clientX - offsetX) + "px";
        box.style.top = (event.clientY - offsetY) + "px";
    });

    // Завершення перетягування
    document.addEventListener("mouseup", function (event) {
        if (!isDragging) return;
        isDragging = false;
        box.style.cursor = "grab";

        // Перевіряємо, чи елемент над зоною dropzone
        let boxRect = box.getBoundingClientRect();
        let dropzoneRect = dropzone.getBoundingClientRect();

        if (
            boxRect.left > dropzoneRect.left &&
            boxRect.right < dropzoneRect.right &&
            boxRect.top > dropzoneRect.top &&
            boxRect.bottom < dropzoneRect.bottom
        ) {
            dropzone.innerText = "Блок видалено!";
            box.style.display = "none";
        }
    });
});

