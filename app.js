function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}