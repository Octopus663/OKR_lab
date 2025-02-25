document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const dropzone = document.getElementById("dropzone");
    let isDragging = false;
    let offsetX, offsetY;

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
});