function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}