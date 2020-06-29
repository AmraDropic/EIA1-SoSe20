"use strict";
let task = ["gym", "work", "study"];
window.addEventListener("load", function () {
    var trash = document.querySelector(".fa-trash-alt");
    var todos = document.querySelector(".addtolist");
    todolist();
    var input = document.querySelector("#input");
    console.log(input);
    var button = document.querySelector("#btn");
    button.addEventListener("click", function () {
        task.push(input.value);
        todolist();
        input.value = "";
        console.log(task);
    });
    function todolist() {
        todos.innerHTML = "";
        for (var index = 0; index < task.length; index++) {
            todos.innerHTML += "<div>" + "<input type='checkbox'>" + task[index] + "<i class='fas fa-trash-alt'></i>" + "</div>";
        }
        let deletetask = document.getElementsByClassName("fas fa-trash-alt");
        let i;
        for (i = 0; i < deletetask.length; i++) {
            deletetask[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            };
            var total = document.querySelector("#total");
            total.innerHTML = task.length;
        }
    }
});
//mit Hilfe von Moritz
//# sourceMappingURL=script.js.map