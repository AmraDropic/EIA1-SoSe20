"use strict";
let task = ["work", "study", "exercise"];
window.addEventListener("load", function () {
    let trash = document.querySelector(".fa-trash-alt");
    let todo = document.querySelector("#todo");
    alltasks();
    let input = document.querySelector("#input");
    console.log(input);
    let button = document.querySelector("#add");
    button.addEventListener("click", function () {
        task.push(input.value);
        alltasks();
        input.value = "";
        console.log(task);
    });
    function alltasks() {
        todo.innerHTML = "";
        for (var index = 0; index < task.length; index++) {
            todo.innerHTML += "<div>" + "<input type='checkbox'>" + task[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        var taskInTotal = document.querySelector("#anzahl");
        anzahl.innerHTML = task.length;
    }
});
//mit Hilfe von Moritz
//# sourceMappingURL=script.js.map