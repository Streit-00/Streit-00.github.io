var todos               = [];
var form                = document.querySelector('form');
var newTodo             = document.querySelector('.new-todo');
var deleteButton        = document.querySelectorAll('.destroy');
var checkboxCompleted   = document.querySelectorAll('.toggle');
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
    +			'<input class="toggle" type="checkbox" {{checked}}>'
    +			'<label>{{title}}</label>'
    +			'<button class="destroy" id="{{id}}" onClick="deleteTask(this.id)"></button>'
    +		'</div>'
    +	'</li>';
   }

form.onsubmit = async event => {
    event.preventDefault();

    setData();
    updateTodoList(todos);
}

function setData(){
    todos.push(new todo(newTodo.value, new Date().getTime(), false));
}

function updateTodoList(data){
    var view = '';

    Template();

    for (let i = 0; i < data.length; i++){
        var node        = template;
        var completed   = '';
        var checked     = '';

        if (data[i].completed){
            completed   = 'completed';
            checked     = 'checked';
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
}

function updateCheckbox(id){
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            console.log(todos[i]);
            todos[i].completed = true;
        }
    }
    updateTodoList(todos);
}

function deleteTask(id) {
    var del;
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id === id){
            del = todos[i];
        }
    }
    todos.pop(del);
    updateTodoList(todos);
}