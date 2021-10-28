var todos               = [];
var uncompletedTodos    = [];
var completedTodos      = [];
var form                = document.querySelector('form');
var formfilters         = document.querySelector('.filters');
var newTodo             = document.querySelector('.new-todo');
var deleteButton        = document.querySelectorAll('.destroy');
var check               = document.querySelectorAll('.toggle');
var flag                = false;
var button;
var template;

class todo {
    constructor(title, id, completed) {
        this.title      = title;
        this.id         = id;
        this.completed  = completed;
    }
}

function Template() {
    template
    =	'<li data-id="{{id}}" class="{{completed}}">'
    +		'<div class="view">'
    +			'<input class="toggle" type="checkbox" id="{{id}}" onClick="updateCheckbox(this.id)" {{checked}}>'
    +			'<label>{{title}}</label>'
    +			'<button class="destroy" id="{{id}}" onClick="deleteTask(this.id)"></button>'
    +		'</div>'
    +	'</li>';
}

form.onsubmit = async event => {
    event.preventDefault();

    if (newTodo.value == ""){
        return;
    }

    setData();
    updateTodoList(todos);
}

formfilters.onsubmit = async event => {
    event.preventDefault();

    if (button == 'all'){
        updateTodoList(todos);
    }
    else if (button == 'active'){
        uncompletedTodos = [];
        for (let i = 0; i < todos.length; i++){
            if (!todos[i].completed){
                uncompletedTodos.push(todos[i]);
            }
        }
        updateTodoList(uncompletedTodos)
    }
    else if (button == 'completed'){
        var completedTodos = [];
        for (let i = 0; i < todos.length; i++){
            if (todos[i].completed){
                completedTodos.push(todos[i]);
            }
        }
        updateTodoList(completedTodos)
    }
}

function setData(){
    todos.push(new todo(newTodo.value, new Date().getTime(), false));
}

function updateTodoList(data){
    var view = '';
    var left = data.length;

    Template();

    for (let i = 0; i < data.length; i++){
        var node        = template;
        var completed   = '';
        var checked     = '';

        if (data[i].completed){
            completed   = 'completed';
            checked     = 'checked';
            left--;
        }
        
        node = node.replace('{{id}}', data[i].id);
        node = node.replace('{{title}}', data[i].title);
        node = node.replace('{{completed}}', completed);
        node = node.replace('{{checked}}', checked);
        node = node.replace('{{id}}', data[i].id);
        node = node.replace('{{id}}', data[i].id);

        view = view + node;
    }
    document.querySelector('.todo-list').innerHTML = view;
    document.querySelector('.new-todo').value = '';
    updateTodoCount(left);
}

function updateTodoCount(left){
    if (left != 0){
        if (left == 1){
            document.querySelector('.todo-count').innerHTML = left + ' item left';
        }
        else{
            document.querySelector('.todo-count').innerHTML = left + ' items left';
        }
    }
    else if (left == 0){
        document.querySelector('.todo-count').innerHTML = '';
    }
}

function updateCheckbox(id){
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id == id){
            if (todos[i].completed == true){
                todos[i].completed = false;
            }
            else {
                todos[i].completed = true;
            }
        }
    }
    updateTodoList(todos);
}

function checkAll(){
    if (flag){
        for (let i = 0; i < todos.length; i++){
            if (todos[i].completed == false){
                todos[i].completed = true;
            }
        }
        flag = false;
    } 
    else if (!flag){
        for (let i = 0; i < todos.length; i++){
            if (todos[i].completed == true){
                todos[i].completed = false;
            }
        }
        flag = true;
    } 
    updateTodoList(todos);
}

function deleteTask(id){
    var tempList = [];
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id != id){
            tempList.push(todos[i]);
        }
    }
    
    todos.length = 0;

    for (let i = 0; i < tempList.length; i++){
        todos.push(tempList[i]);
    }

    updateTodoList(todos);
}

function clearCompleted(){
    var tempList = [];
    for (let i = 0; i < todos.length; i++){
        if (!todos[i].completed){
            tempList.push(todos[i]);
        }
    }
    
    todos.length = 0;

    for (let i = 0; i < tempList.length; i++){
        todos.push(tempList[i]);
    }

    updateTodoList(todos);
}