import { todoFactory } from "./todoFactory";

const todoLogic = (function () {
	const todoPopUp = document.getElementById("todoPopUp");
	const todoForm = document.getElementById("todoForm");

	const clearTodoDiv = function (div) {
		while (div.childNodes.length !== 1) {
			div.removeChild(div.lastChild);
		}
	};

	const renderTodos = function (todoList) {
		todoList.forEach((todo) => {
			todo.displayTodo();
		});
	};

	const createTodo = function (project) {
		const handleCreateTodo = function (e) {
			console.log("createTodoTest");
			e.preventDefault();
			let newTodo = todoFactory(project.todoDiv);
			project.todoList.push(newTodo);
			clearTodoDiv(project.todoDiv);
			renderTodos(project.todoList);
			todoForm.reset();
			todoPopUp.style.cssText = "display: none";
			todoForm.removeEventListener("submit", handleCreateTodo);
		};

		todoForm.addEventListener("submit", handleCreateTodo);
	};

	return { createTodo };
})();

export { todoLogic };
