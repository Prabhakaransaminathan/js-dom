

const form = document.querySelector("#task-form");
const taskinput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector("#clear-btn");
const edittask = document.querySelector(".edit-item");
loadEventListerners();
function loadEventListerners() {

    // DOM load event
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add task


    form.addEventListener("submit", addTask);

    // edit task

    edittask.addEventListener("click", edit);
    // clear task event
    clearBtn.addEventListener("click", clearTask);
    // remove task
    taskList.addEventListener("click", remove);

}

function edit(){
    console.log("ddd");
}
function getTasks() {
    let tasks
    // console.log(tasks);
    if (localStorage.getItem("tasks") === null) {
        tasks = [];



    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }
    tasks.forEach(function (task) {
        // create li tag

        const li = document.createElement("li");


        // Add classname
        li.className = "collection-item";

        // add innertext
        li.innerText = task;


        // create a tag

        const link = document.createElement("a");

        // add classname
        link.className = "delete-item secondary-content";
        // add innerHtml to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append link to li 

        li.appendChild(link);

        // append li to tasklist

        taskList.appendChild(li);

        // create li tag
        const li1 = document.createElement("a");

        // Add className
        li1.className = "edit-item secondary-content";

        // Add InnerHtml
        li1.innerHTML = `<i class="fa fa-edit"></i>`;

        // append li1
        li.appendChild(li1);





    })



}

function addTask(e) {

    e.preventDefault();


    if (taskinput.value === "") {
        alert("please fill the box");
    }
    else {

        //     <a href="#" class="edit-item secondary-content" title="im Link">
        //     <i class="fa fa-edit"></i>
        // </a>


        // create li tag

        const li = document.createElement("li");


        // Add classname
        li.className = "collection-item";

        // add innertext
        li.innerText = taskinput.value;


        // create a tag

        const link = document.createElement("a");

        // add classname
        link.className = "delete-item secondary-content";
        // add innerHtml to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // append link to li 

        li.appendChild(link);

        // append li to tasklist

        taskList.appendChild(li);


        // Store in localstorage
        storeTaskInLocalStorage(taskinput.value);

        taskinput.value = "";

    }
}





function clearTask() {
    taskList.innerHTML = "";
    clearTaskFromlocalstorage();

}
function clearTaskFromlocalstorage() {
    localStorage.removeItem("tasks");
}


function storeTaskInLocalStorage(task) {
    let tasks
    // console.log(tasks);
    if (localStorage.getItem("tasks") === null) {
        tasks = [];



    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }
    // console.log(tasks);
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function remove(e) {
    if (e.target.parentElement.classList.contains("delete-item secondary-content"));
    if (confirm("Are you sure ")) {
        e.target.parentElement.parentElement.remove();
        removeTaskFromlocalstorage(e.target.parentElement.parentElement);

    }


}
function removeTaskFromlocalstorage(taskElement) {

    console.log(taskElement.innerText);
    let tasks
    // console.log(tasks);
    if (localStorage.getItem("tasks") === null) {
        tasks = [];



    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));

    }
    tasks.foreach(function (task, index) {
        if (taskElement.innerText === task)
            tasks.splice(index, 1);

    })
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// const arr = [1, 2, 3];

// get,set, remove,clear


// localStorage.setItem("test","hello");
//  console.log( localStorage.getItem("test"));
//  localStorage.removeItem("test");
//  console.log(localStorage.getItem("test"));
// localStorage.setItem("arr",arr);




//  JSON
// console.log(arr);
// let ArrToString =JSON.stringify(arr);
// console.log(ArrToString);

// let StringToArr=JSON.parse(ArrToString);
// console.log(StringToArr);