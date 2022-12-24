const tasks = [];

let id_task = 0;

let input_task = document.getElementById('input_task');

let table_tasks = document.getElementById('table_tasks');

let total_tasks = document.getElementById('total_tasks');

let number_completed_tasks = document.getElementById('number_completed_tasks');

function addTask() {
    if (!input_task.value) {
        alert("Debes ingresar la tarea");
    } else {
        let object_task = {id: id_task,
        description: input_task.value,
        completed: false,
        }
        input_task.value = "";
        tasks.push(object_task);
        id_task++;
        renderTasks();
    }        
}



function renderTasks() {
    let text = `<tr>
            <th class="ps-0">ID</th>
            <th class="ps-3">Tarea</th>
            </tr>`;
    tasks.forEach(function(x) {text += `
    <tr><td class="ps-0">${x.id}</td>
    <td class="ps-3 pe-5">${x.description}</td>
    <td><input id="checkbox_${x.id}" type="checkbox"></td>
    <td id="symbol_${x.id}" class="ps-1">❌</td>
    </tr>
    `})
    table_tasks.innerHTML = text;
    text = "";
    if (!tasks) {
        total_tasks.innerHTML = "0";
    } else {
        total_tasks.innerHTML=tasks.length;
    }
    filterTasks();    
}

function filterTasks() {
    const list_completed_tasks = tasks.filter(x=>x.completed == true);
    if (!list_completed_tasks) {
        number_completed_tasks.innerHTML = "0";
    } else {
        number_completed_tasks.innerHTML = list_completed_tasks.length;
    }
}



