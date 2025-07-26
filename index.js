const inp = document.getElementById("input-box");
const list = document.getElementById("list-container");


function addTask() {
    if (inp.value.trim() === '') {
        alert("Please add a task!");
    } else {
        let li = document.createElement("li");
        li.textContent = inp.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
         li.appendChild(span);

        list.appendChild(li);
        inp.value = "";
        saveData();
    }
}



list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    


     else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

list.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
        saveData();
    }
});

inp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});




function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}
showTask();


