
let task: string[] = ["work", "study", "exercise"];



window.addEventListener("load", function() {
    
    let trash: HTMLElement = document.querySelector (".fa-trash-alt");
    let todo: HTMLElement = document.querySelector ("#todo");

    alltasks();

    let input: HTMLInputElement = document.querySelector("#input");
    console.log(input);
    let button: HTMLElement = document.querySelector("#add");

    button.addEventListener("click", function () {
        task.push(input.value);
        alltasks();
        input.value = "";
        console.log(task);
    });


    function alltasks(): void {

        todo.innerHTML = "";
    
        for (var index = 0; index < task.length; index++) {
            todo.innerHTML += "<div>" + "<input type='checkbox'>"  + task[index] + "<i class='fas fa-trash-alt'id=delete></i>" +  "</div>";
                     }
    
    
        var taskInTotal: HTMLLIElement = document.querySelector("#anzahl");
        anzahl.innerHTML = task.length;
    }
});


//mit Hilfe von Moritz



















