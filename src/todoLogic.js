import { projectFactory } from "./projectFactory";
import { todoFactory } from "./todoFactory";

const todoLogic = (function () {
	const todoPopUp = document.getElementById("todoPopUp");
	const todoForm = document.getElementById("todoForm");

	const createTodo = function () {
		todoForm.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log();
			//	let newTodo = todoFactory();
			todoForm.reset();
			todoPopUp.style.cssText = "display: none";
		});
	};

	return { createTodo };
})();

export { todoLogic };
