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
			console.log(project.addTodoBtn);
			todoLogic.createTodo(project);
		});
	};

	const startForm = function (project) {
		closeProjectForm();
		openProjectForm(project);
	};

	return { startForm };
})();

export { todoFormLogic };
