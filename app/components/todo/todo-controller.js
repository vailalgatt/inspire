function TodoController() {
	var todoService = new TodoService()

	this.addTodoFromForm = function (e) {
		e.preventDefault()
		var form = e.target
		var todos = todoService.getTodos()
		todos.push(form.todo.value)



		todoService.saveTodos(todos)
		draw()
	}

	function deleteTodo() {
        var id = this.getAttribute('id');
        var todos = todoService.getTodos();
        todos.splice(id, 1);
        todoService.saveTodos(todos);
        draw();
        return false;
    }

    function draw() {
        var todos = todoService.getTodos();
		var items = todos.length
		document.getElementById("num-items").innerText = items
        
		var template = '<ul>';
        for (var i = 0; i < todos.length; i++) {
            template += '<li>' + todos[i] + ' <button class="remove" id="' + i + '">x</button></li>';
        };
        template += '</ul>';
        document.getElementById('todoHere').innerHTML = template;
        var buttons = document.getElementsByClassName('remove');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', deleteTodo);
        };
			
    }
    draw();
}