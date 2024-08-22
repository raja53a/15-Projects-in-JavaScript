const inputBox = document.getElementById("input-box");
const listContainers = document.getElementById("list-containers");

function addTask() {
    if (inputBox.value == '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainers.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = "";
    saveData();
}


/* In the below script, we are taking click event on whole container and taking the tagName if 
tagName is LI then we will use classList and toggle the checked/unchecked css and if tagName is span
means cross it will remove the parent element means that particular li tag */

listContainers.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

/* Using Local Storage to store data in Browser */

function saveData(){
    localStorage.setItem("data",listContainers.innerHTML);
}

function showTask(){
    listContainers.innerHTML = localStorage.getItem("data");
}

showTask();