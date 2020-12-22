import { todoFactory } from "./todoFactory";

const todoLogic = (function () {
	const todoPopUp = document.getElementById("todoPopUp");
	const todoForm = document.getElementById("todoForm");

	const renderTodos = function (todoList) {
		todoList.forEach((todo) => {
			todo.displayTodo();
		});
	};

	const createTodo = function (project) {
		todoForm.addEventListener("submit", (e) => {
			console.log("createTodoTest");
			e.preventDefault();
			let newTodo = todoFactory(project.todoDiv);
			project.todoList.push(newTodo);
			renderTodos(project.todoList);
			todoForm.reset();
			todoPopUp.style.cssText = "display: none";
		});
	};

	return { createTodo };
})();

export { todoLogic };
