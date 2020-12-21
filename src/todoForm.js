import { elementFactory } from "./elementFactory";
import { todoLogic } from "./todoLogic";

const todoFormLogic = (function () {
	const form = document.getElementById("todoPopUp");
	const closeBtn = document.getElementById("closeTodoForm");

	const closeProjectForm = function () {
		closeBtn.addEventListener("click", function () {
			form.style.cssText = "display: none";
		});
	};

	const openProjectForm = function (project) {
		project.addTodoBtn.addEventListener("click", function () {
			form.style.cssText = "display: flex";
		});
	};

	const startForm = function (project) {
		console.log("hello");
		closeProjectForm();
		openProjectForm(project);
		todoLogic.createTodo();
	};

	return { startForm };
})();

export { todoFormLogic };
