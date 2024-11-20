const submitButton = document.getElementById("submit");
const searchButton = document.getElementById("search");
const container = document.getElementById("taskContainer");
const completedTaskContainer = document.getElementById("completed");
const searchResults = document.getElementById("searchResults");

let tasks = [];

submitButton.addEventListener("click", () => {
    const taskName = document.getElementById("inp").value;
    tasks.push(taskName);
    createTask(taskName);
    document.getElementById("inp").value = "";

});

searchButton.addEventListener("click", () => {
    searchResults.innerHTML = "";

    const taskName = document.getElementById("inp").value;
    const result = tasks.filter(el => el == taskName);
    const div = document.createElement("div");
    const discription = document.createElement("p");
    discription.innerHTML = "Search Results...";
    searchResults.appendChild(discription);
    result.forEach(task => {
        const p = document.createElement("p");
        p.innerHTML = task;
        div.appendChild(p);
    });
    
    div && searchResults.appendChild(div);
})

function createTask(taskName) {
    // Creation of Elements
    const div = document.createElement("div");
    const span = document.createElement("span");
    const wrapDiv = document.createElement("div");
    const delButton = document.createElement("button");
    const editButton = document.createElement("button");
    const taskEditInput = document.createElement("input");
    const saveButton = document.createElement("button");
    const doneButton = document.createElement("button");

    // adding event listners
    delButton.addEventListener("click", () => {
        tasks = tasks.filter(el => el !== taskName);
        div.innerHTML = "";
    });

    editButton.addEventListener("click", () => {
        taskEditInput.hidden = false;
        taskEditInput.value = taskName;
        span.hidden = true;
        editButton.hidden = true;
        delButton.hidden = true;
        saveButton.hidden = false;
    });

    saveButton.addEventListener("click", () => {
        span.innerHTML = taskEditInput.value;
        taskEditInput.hidden = true;
        span.hidden = false;
        editButton.hidden = false;
        delButton.hidden = false;
        saveButton.hidden = true;
    });

    doneButton.addEventListener("click", () => {
        completedTask(taskName);
        tasks = tasks.filter(el => el !== taskName);
        div.innerHTML = "";
    })


    // CSS Assign
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-between";
    div.style.padding = "10px";

    wrapDiv.style.display = "flex";
    wrapDiv.style.gap = "10px";
    taskEditInput.hidden = true;
    saveButton.hidden = true;

    // Writing inner html
    span.innerHTML = taskName;
    delButton.innerHTML = "Delete";
    editButton.innerHTML = "Edit";
    saveButton.innerHTML = "Save";
    doneButton.innerHTML = "Done";

    // Appending Childs
    wrapDiv.appendChild(delButton);
    wrapDiv.appendChild(editButton);
    wrapDiv.appendChild(saveButton);
    wrapDiv.appendChild(doneButton);

    div.appendChild(span);
    div.appendChild(taskEditInput);
    div.appendChild(wrapDiv);

    container.appendChild(div);
};


function completedTask(taskName) {
    const div = document.createElement("div");
    const span = document.createElement("span");


    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "start";
    div.style.padding = "10px";

    span.innerHTML = taskName;
    div.appendChild(span);
    completedTaskContainer.appendChild(div);

}
