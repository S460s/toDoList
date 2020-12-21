import { projectFactory } from "./projectFactory";
import { todoFactory } from "./todoFactory";

const todoLogic = (function () {
	const todoPopUp = document.getElementById("todoPopUp");
	const todoForm = document.getElementById("todoForm");

	const handleCreateTodo = function (e) {
		e.preventDefault();
		console.log("zike");
		//	let newTodo = todoFactory();
		todoForm.reset();
		todoPopUp.style.cssText = "display: none";
	};

	const createTodo = function () {
		todoForm.addEventListener("submit", handleCreateTodo);
	};

	return { createTodo };
})();

export { todoLogic };
