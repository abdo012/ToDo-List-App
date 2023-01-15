let task_name = document.querySelector(".form-task-name");
let task_subject = document.querySelector(".form-task-subject");
let add_btn = document.querySelector(".add-btn");
let output = document.querySelector(".output");
let error = document.querySelector(".error");
let add_message = document.querySelector(".add-message");
let tasks_num = document.querySelector(".tasks-num");


add_btn.addEventListener("click" , function(e){
    e.preventDefault();
    validation();
})
// =====================Function Validation Form
function validation(){
    if(task_name.value == "" || task_subject.value == ""){
        error.style.cssText = "top: 20px; opacity: 1;"
        end_error();
    }else{
        add_task();
        clear_form();
        add_message.style.cssText = "top: 20px; opacity: 1;";
        end_error();
        // counter
        tasks_num.value++;
    }
}
function clear_form(){
    task_name.value = "";
    task_subject.value = "";
}
// =====================Function Add Task
function add_task(){
    let set_task = `
        <div class="task">
        <div class="task-content">
            <h4 class="name">${task_name.value}
                <i class="fas fa-caret-down"></i>
            </h4>
            <p class="subject">${task_subject.value}</p>
        </div>
        <div class="task-control">
            <button class="del">del</button>
            <button class="done">done</button>
        </div>
        </div>
        `
    output.innerHTML += set_task;
}

// =====================Function btn control
function task_control(){
    // all btn control
    document.addEventListener("click", function(e){
        // show task btn
        if(e.target.className === "name"){
            e.target.nextElementSibling.classList.toggle("show-task");
        }
        // del task btn
        else if (e.target.className === "del") {
            e.target.parentElement.parentElement.remove();
            tasks_num.value--;
        }
        // done task btn
        else if(e.target.className === "done"){
            e.target.parentElement.previousElementSibling.classList.toggle("done-task")
        }
    })
}
task_control()

// =====================Function End Error
function end_error(){
    setTimeout(()=>{
        error.style.top = "-60px";
        add_message.style.cssText = "top: -70px;";
    },1300);
}



