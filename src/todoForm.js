import { todoLogic } from "./todoLogic";

const todoFormLogic = (function () {
	const form = document.getElementById("todoPopUp");
	const closeBtn = document.getElementById("closeTodoForm");
	const todoForm = document.getElementById("todoForm");

	const closeProjectForm = function () {
		closeBtn.addEventListener("click", function () {
			form.style.cssText = "display: none";
			todoForm.reset();
		});
	};

	const openProjectForm = function (project) {
		project.addTodoBtn.addEventListener("click", function () {
			form.style.cssText = "display: flex";
			console.log(project.addTodoBtn);
			let logic = todoLogic(project);
			logic.createTodo();
			closeBtn.addEventListener("click", logic.removeEventListener);
		});
	};

	const startForm = function (project) {
		closeProjectForm();
		openProjectForm(project);
	};

	return { startForm };
})();

export { todoFormLogic };
